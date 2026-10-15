(() => {
  const catalog = new Map();
  const played = new Set();
  const names = new Set(['preview_play', 'copy_free_prompt', 'pro_unlock_click']);

  window.PromptCinemaEvents = Object.freeze({
    configureCatalog(records) {
      catalog.clear();
      for (const record of records) {
        if (/^fv-[a-z0-9-]+$/.test(record.id) && ['free', 'pro'].includes(record.access)) {
          catalog.set(record.id, record.access);
        }
      }
    },
    track(event, recordId, surface) {
      const access = catalog.get(recordId);
      if (!names.has(event) || !access || !['card', 'detail'].includes(surface)) return false;
      if (event === 'copy_free_prompt' && access !== 'free') return false;
      if (event === 'pro_unlock_click' && access !== 'pro') return false;
      if (event === 'preview_play' && played.has(recordId)) return false;
      if (event === 'preview_play') played.add(recordId);
      const payload = { event, record_id: recordId, access, surface };
      // Events only: no collector, network request, cookies or persistent storage.
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ ...payload });
      } catch { /* Measurement must never interrupt the UI. */ }
      try {
        window.dispatchEvent(new CustomEvent('prompt-cinema:event', { detail: { ...payload } }));
      } catch { /* Optional consumers must never interrupt the UI. */ }
      return true;
    }
  });
})();
