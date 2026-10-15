(() => {
  const originalFetch = window.fetch.bind(window);
  const LIBRARY_URL = './data/library.json';

  window.fetch = async (input, init) => {
    const requested = typeof input === 'string' ? input : input?.url || '';
    const isLibraryRequest = requested === LIBRARY_URL || requested.endsWith('/data/library.json');
    if (!isLibraryRequest) return originalFetch(input, init);

    const manifestResponse = await originalFetch(input, init);
    if (!manifestResponse.ok) return manifestResponse;

    const payload = await manifestResponse.clone().json();
    if (!Array.isArray(payload.recordFiles)) return manifestResponse;

    const records = await Promise.all(payload.recordFiles.map(async recordPath => {
      const response = await originalFetch(recordPath, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Record fetch failed: ${recordPath} (${response.status})`);
      return response.json();
    }));

    const merged = {
      ...payload,
      library: records
    };
    delete merged.recordFiles;

    return new Response(JSON.stringify(merged), {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  };
})();
