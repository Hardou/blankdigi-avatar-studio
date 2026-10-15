(() => {
  const DATA_URL = './data/library.json';
  const SESSION_KEY = 'blankdigi-prompt-cinema-local-import';

  const els = {
    grid: document.getElementById('videoGrid'),
    empty: document.getElementById('emptyState'),
    search: document.getElementById('searchInput'),
    project: document.getElementById('projectFilter'),
    model: document.getElementById('modelFilter'),
    category: document.getElementById('categoryFilter'),
    status: document.getElementById('statusFilter'),
    sort: document.getElementById('sortFilter'),
    count: document.getElementById('resultCount'),
    statTotal: document.getElementById('statTotal'),
    statModels: document.getElementById('statModels'),
    statProjects: document.getElementById('statProjects'),
    statApproved: document.getElementById('statApproved'),
    dialog: document.getElementById('detailDialog'),
    dialogClose: document.getElementById('dialogClose'),
    detailVideo: document.getElementById('detailVideo'),
    detailVideoFallback: document.getElementById('detailVideoFallback'),
    detailCategory: document.getElementById('detailCategory'),
    detailStatus: document.getElementById('detailStatus'),
    detailTitle: document.getElementById('detailTitle'),
    detailMeta: document.getElementById('detailMeta'),
    detailPrompt: document.getElementById('detailPrompt'),
    detailNegativePrompt: document.getElementById('detailNegativePrompt'),
    negativePromptBlock: document.getElementById('negativePromptBlock'),
    detailNotes: document.getElementById('detailNotes'),
    detailTags: document.getElementById('detailTags'),
    logicBlock: document.getElementById('logicBlock'),
    detailLogic: document.getElementById('detailLogic'),
    redactedNotice: document.getElementById('redactedNotice'),
    copyDetailPrompt: document.getElementById('copyDetailPrompt'),
    copyDetailJson: document.getElementById('copyDetailJson'),
    toast: document.getElementById('toast'),
    importButton: document.getElementById('importButton'),
    importInput: document.getElementById('importInput'),
    exportButton: document.getElementById('exportButton'),
    localImportStatus: document.getElementById('localImportStatus')
  };

  const state = {
    baseLibrary: [],
    localLibrary: [],
    library: [],
    search: '',
    project: 'all',
    model: 'all',
    category: 'all',
    status: 'all',
    sort: 'featured',
    currentId: null
  };

  const esc = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const unique = (values) => [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const safeDate = (value) => Number.isNaN(Date.parse(value)) ? 0 : Date.parse(value);
  const isPublicPrompt = (item) => item.access === 'free' && item.promptAccess !== 'redacted' && typeof item.prompt === 'string' && item.prompt.trim().length > 0;

  const publicRecord = (item) => {
    const clean = { ...item };
    delete clean.localOnly;
    delete clean.negativePrompt;
    if (clean.access === 'pro' || clean.promptAccess === 'redacted') delete clean.prompt;
    return clean;
  };

  async function boot() {
    bindEvents();
    try {
      const response = await fetch(DATA_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Library fetch failed: ${response.status}`);
      const payload = await response.json();
      state.baseLibrary = normalizePayload(payload);
    } catch (error) {
      console.error(error);
      showToast('Could not load library data');
      state.baseLibrary = [];
    }

    restoreLocalImport();
    rebuildLibrary();
    populateFilters();
    updateStats();
    updateLocalStatus();
    render();
    openFromUrl();
  }

  function normalizePayload(payload) {
    const records = Array.isArray(payload) ? payload : (payload.library || payload.items || []);
    if (!Array.isArray(records)) return [];
    return records.map(normalizeRecord).filter(Boolean);
  }

  function normalizeRecord(item) {
    if (!item || typeof item !== 'object' || !item.id || !item.title) return null;
    const access = item.access === 'pro' || item.promptAccess === 'redacted' ? 'pro' : 'free';
    const promptAccess = access === 'pro' ? 'redacted' : 'public';
    return {
      id: String(item.id),
      title: String(item.title),
      project: String(item.project || 'Unassigned'),
      category: String(item.category || 'Uncategorized'),
      model: String(item.model || 'Unknown'),
      duration: String(item.duration || '—'),
      ratio: String(item.ratio || '—'),
      language: String(item.language || '—'),
      createdAt: String(item.createdAt || ''),
      status: String(item.status || 'experiment'),
      featured: Boolean(item.featured),
      score: Number.isFinite(Number(item.score)) ? Math.max(0, Math.min(100, Number(item.score))) : null,
      promptVersion: item.promptVersion ? String(item.promptVersion) : '',
      source: item.source ? String(item.source) : 'manual',
      referenceCount: Number.isInteger(item.referenceCount) ? item.referenceCount : Number(item.referenceCount || 0),
      access,
      promptAccess,
      tags: Array.isArray(item.tags) ? item.tags.map(String) : [],
      video: String(item.video || ''),
      poster: item.poster ? String(item.poster) : '',
      prompt: promptAccess === 'redacted' ? '' : String(item.prompt || ''),
      publicSummary: String(item.publicSummary || ''),
      negativePrompt: promptAccess === 'redacted' ? '' : String(item.negativePrompt || ''),
      logic: String(item.logic || ''),
      notes: String(item.notes || ''),
      localOnly: Boolean(item.localOnly)
    };
  }

  function rebuildLibrary() {
    const merged = new Map();
    state.baseLibrary.forEach(item => merged.set(item.id, item));
    state.localLibrary.forEach(item => merged.set(item.id, { ...item, localOnly: true }));
    state.library = [...merged.values()];
  }

  function restoreLocalImport() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      state.localLibrary = normalizePayload(parsed).map(item => ({ ...item, localOnly: true }));
    } catch (error) {
      console.warn('Could not restore local import', error);
      sessionStorage.removeItem(SESSION_KEY);
      state.localLibrary = [];
    }
  }

  function persistLocalImport() {
    if (!state.localLibrary.length) {
      sessionStorage.removeItem(SESSION_KEY);
      return;
    }
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ schemaVersion: '1.0.0', library: state.localLibrary }));
  }

  function populateFilters() {
    const configs = [
      [els.project, unique(state.library.map(item => item.project))],
      [els.model, unique(state.library.map(item => item.model))],
      [els.category, unique(state.library.map(item => item.category))],
      [els.status, unique(state.library.map(item => item.access))]
    ];

    configs.forEach(([select, values]) => {
      const first = select.options[0];
      select.innerHTML = '';
      select.appendChild(first);
      values.forEach(value => select.insertAdjacentHTML('beforeend', `<option value="${esc(value)}">${esc(value)}</option>`));
    });
  }

  function updateStats() {
    els.statTotal.textContent = String(state.library.length);
    els.statModels.textContent = String(unique(state.library.map(item => item.model)).length);
    els.statProjects.textContent = String(unique(state.library.map(item => item.project)).length);
    els.statApproved.textContent = String(state.library.filter(item => item.access === 'free').length);
  }

  function updateLocalStatus() {
    if (!state.localLibrary.length) {
      els.localImportStatus.hidden = true;
      els.localImportStatus.innerHTML = '';
      return;
    }
    els.localImportStatus.hidden = false;
    els.localImportStatus.innerHTML = `<span><strong>${state.localLibrary.length}</strong> local record${state.localLibrary.length === 1 ? '' : 's'} loaded for this browser session</span><button type="button" id="clearLocalImport">Clear local</button>`;
    document.getElementById('clearLocalImport').addEventListener('click', clearLocalImport);
  }

  function bindEvents() {
    els.search.addEventListener('input', event => {
      state.search = event.target.value.trim().toLowerCase();
      render();
    });

    [
      [els.project, 'project'],
      [els.model, 'model'],
      [els.category, 'category'],
      [els.status, 'status'],
      [els.sort, 'sort']
    ].forEach(([element, key]) => {
      element.addEventListener('change', event => {
        state[key] = event.target.value;
        render();
      });
    });

    els.grid.addEventListener('click', async event => {
      const copyButton = event.target.closest('[data-copy]');
      if (copyButton) {
        event.stopPropagation();
        const item = state.library.find(entry => entry.id === copyButton.dataset.copy);
        if (item && isPublicPrompt(item)) await copyText(item.prompt, 'Prompt copied');
        return;
      }

      const card = event.target.closest('[data-open]');
      if (card) openDetail(card.dataset.open);
    });

    els.grid.addEventListener('keydown', event => {
      const card = event.target.closest('[data-open]');
      if (!card) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDetail(card.dataset.open);
      }
    });

    els.grid.addEventListener('pointerover', event => {
      const video = event.target.closest('video[data-preview]');
      if (video) video.play().catch(() => {});
    });

    els.grid.addEventListener('pointerout', event => {
      const video = event.target.closest('video[data-preview]');
      if (video) video.pause();
    });

    els.grid.addEventListener('error', event => {
      if (!(event.target instanceof HTMLVideoElement) || !event.target.matches('[data-preview]')) return;
      const frame = event.target.closest('.video-frame');
      if (!frame || frame.querySelector('.card-video-fallback')) return;
      event.target.hidden = true;
      const fallback = document.createElement('div');
      fallback.className = 'card-video-fallback';
      fallback.textContent = 'Preview unavailable';
      frame.prepend(fallback);
    }, true);

    els.dialogClose.addEventListener('click', closeDetail);
    els.dialog.addEventListener('click', event => {
      if (event.target === els.dialog) closeDetail();
    });
    els.dialog.addEventListener('close', clearUrlState);

    els.copyDetailPrompt.addEventListener('click', async () => {
      const item = state.library.find(entry => entry.id === state.currentId);
      if (item && isPublicPrompt(item)) await copyText(item.prompt, 'Prompt copied');
    });

    els.copyDetailJson.addEventListener('click', async () => {
      const item = state.library.find(entry => entry.id === state.currentId);
      if (!item) return;
      const exportRecord = publicRecord(item);
      await copyText(JSON.stringify(exportRecord, null, 2), 'Record JSON copied');
    });

    els.detailVideo.addEventListener('error', () => {
      els.detailVideo.hidden = true;
      els.detailVideoFallback.hidden = false;
    });

    els.importButton.addEventListener('click', () => els.importInput.click());
    els.importInput.addEventListener('change', importJsonFile);
    els.exportButton.addEventListener('click', exportVisibleRecords);
  }

  function getVisibleItems() {
    const query = state.search;
    const filtered = state.library.filter(item => {
      if (state.project !== 'all' && item.project !== state.project) return false;
      if (state.model !== 'all' && item.model !== state.model) return false;
      if (state.category !== 'all' && item.category !== state.category) return false;
      if (state.status !== 'all' && item.access !== state.status) return false;
      if (!query) return true;

      const haystack = [
        item.title, item.project, item.category, item.model, item.language, item.status,
        item.promptVersion, item.source, item.prompt, item.publicSummary, item.negativePrompt,
        item.logic, item.notes, ...(item.tags || [])
      ].join(' ').toLowerCase();

      return haystack.includes(query);
    });

    return filtered.sort((a, b) => {
      if (state.sort === 'title') return a.title.localeCompare(b.title);
      if (state.sort === 'newest') return safeDate(b.createdAt) - safeDate(a.createdAt);
      if (state.sort === 'score') return (b.score ?? -1) - (a.score ?? -1) || safeDate(b.createdAt) - safeDate(a.createdAt);
      if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
      return (b.score ?? -1) - (a.score ?? -1) || safeDate(b.createdAt) - safeDate(a.createdAt);
    });
  }

  function render() {
    const items = getVisibleItems();
    els.count.textContent = `${items.length} ${items.length === 1 ? 'result' : 'results'}`;
    els.empty.hidden = items.length !== 0;
    els.grid.innerHTML = items.map(cardTemplate).join('');
  }

  function cardTemplate(item) {
    const tags = (item.tags || []).slice(0, 3).map(tag => `<span>#${esc(tag)}</span>`).join('');
    const promptCopy = isPublicPrompt(item)
      ? `<button class="secondary-btn" data-copy="${esc(item.id)}">Copy prompt</button>`
      : `<button class="secondary-btn locked" disabled>PRO · Unlock Full Recipe</button>`;
    const snippet = isPublicPrompt(item) ? item.prompt : (item.publicSummary || 'Prompt omitted from the public catalog.');
    const score = item.score == null ? '' : `<span class="score-badge">${esc(item.score)} score</span>`;
    const local = item.localOnly ? `<span class="local-badge">LOCAL</span>` : '';
    const poster = item.poster ? ` poster="${esc(item.poster)}"` : '';

    return `
      <article class="video-card" data-open="${esc(item.id)}" tabindex="0" role="button" aria-label="Open ${esc(item.title)} details">
        <div class="video-frame">
          <video data-preview muted loop playsinline preload="none" src="${esc(item.video)}"${poster}></video>
          <div class="video-shade"></div>
          <div class="video-topline">
            <div class="badge-stack"><span class="model-badge">${esc(item.model)}</span>${local}</div>
            <div class="badge-stack right">${score}<span class="ratio-badge">${esc(item.duration)} · ${esc(item.ratio)}</span></div>
          </div>
          <div class="video-caption">
            <span>${esc(item.project)} · ${esc(item.category)}</span>
            <strong>${esc(item.title)}</strong>
          </div>
        </div>
        <div class="card-body">
          <div class="card-status-row"><span class="status-chip ${esc(item.access)}">${esc(item.access.toUpperCase())}</span><span>${esc(item.promptVersion || item.source)}</span></div>
          <p>${esc(snippet)}</p>
          <div class="tag-row">${tags}</div>
          <div class="card-actions">${promptCopy}<button class="text-btn" tabindex="-1">Details →</button></div>
        </div>
      </article>
    `;
  }

  function openDetail(id) {
    const item = state.library.find(entry => entry.id === id);
    if (!item) return;

    state.currentId = id;
    els.detailCategory.textContent = `${item.project} · ${item.category}`;
    els.detailStatus.textContent = item.access.toUpperCase();
    els.detailStatus.className = `status-chip ${item.access}`;
    els.detailTitle.textContent = item.title;
    els.detailMeta.innerHTML = [
      item.model,
      item.duration,
      item.ratio,
      item.language,
      item.promptVersion && `prompt ${item.promptVersion}`,
      item.referenceCount ? `${item.referenceCount} refs` : '',
      item.score != null ? `score ${item.score}` : '',
      item.source && `source ${item.source}`,
      item.createdAt
    ].filter(Boolean).map(value => `<span>${esc(value)}</span>`).join('');

    const publicPrompt = isPublicPrompt(item);
    els.detailPrompt.textContent = publicPrompt ? item.prompt : (item.publicSummary || '');
    els.detailPrompt.hidden = !publicPrompt && !item.publicSummary;
    els.redactedNotice.hidden = publicPrompt;
    els.copyDetailPrompt.hidden = !publicPrompt;
    els.copyDetailPrompt.disabled = !publicPrompt;

    els.detailNegativePrompt.textContent = item.negativePrompt || '';
    els.negativePromptBlock.hidden = !item.negativePrompt;
    els.detailNotes.textContent = item.notes || '';
    els.detailNotes.hidden = !item.notes;
    els.detailTags.innerHTML = (item.tags || []).map(tag => `<span>#${esc(tag)}</span>`).join('');
    els.detailLogic.textContent = item.logic || '';
    els.logicBlock.hidden = !item.logic;

    els.detailVideo.hidden = false;
    els.detailVideoFallback.hidden = true;
    els.detailVideo.src = item.video;
    if (item.poster) els.detailVideo.poster = item.poster;
    else els.detailVideo.removeAttribute('poster');
    els.detailVideo.load();

    setUrlState(id);
    if (!els.dialog.open) els.dialog.showModal();
  }

  function closeDetail() {
    if (!els.dialog.open) return;
    els.detailVideo.pause();
    els.dialog.close();
  }

  function setUrlState(id) {
    const url = new URL(window.location.href);
    url.searchParams.set('video', id);
    window.history.replaceState({}, '', url);
  }

  function clearUrlState() {
    state.currentId = null;
    const url = new URL(window.location.href);
    url.searchParams.delete('video');
    window.history.replaceState({}, '', url);
  }

  function openFromUrl() {
    const id = new URL(window.location.href).searchParams.get('video');
    if (id && state.library.some(item => item.id === id)) openDetail(id);
  }

  async function importJsonFile(event) {
    const [file] = event.target.files || [];
    event.target.value = '';
    if (!file) return;

    try {
      const parsed = JSON.parse(await file.text());
      const imported = normalizePayload(parsed);
      if (!imported.length) throw new Error('No valid records found');
      state.localLibrary = imported.map(item => ({ ...item, localOnly: true }));
      persistLocalImport();
      rebuildLibrary();
      populateFilters();
      updateStats();
      updateLocalStatus();
      render();
      showToast(`${imported.length} local record${imported.length === 1 ? '' : 's'} imported`);
    } catch (error) {
      console.error(error);
      showToast('Import failed: invalid library JSON');
    }
  }

  function clearLocalImport() {
    state.localLibrary = [];
    persistLocalImport();
    rebuildLibrary();
    resetFiltersIfMissing();
    populateFilters();
    updateStats();
    updateLocalStatus();
    render();
    showToast('Local import cleared');
  }

  function resetFiltersIfMissing() {
    const checks = [
      ['project', item => item.project],
      ['model', item => item.model],
      ['category', item => item.category],
      ['status', item => item.access]
    ];
    checks.forEach(([key, getter]) => {
      if (state[key] === 'all') return;
      if (!state.library.some(item => getter(item) === state[key])) state[key] = 'all';
    });
  }

  function exportVisibleRecords() {
    const items = getVisibleItems().map(item => {
      return publicRecord(item);
    });
    const payload = {
      schemaVersion: '1.0.0',
      exportedAt: new Date().toISOString(),
      filters: {
        search: state.search,
        project: state.project,
        model: state.model,
        category: state.category,
        status: state.status,
        sort: state.sort
      },
      library: items
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blankdigi-prompt-cinema-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast(`${items.length} record${items.length === 1 ? '' : 's'} exported`);
  }

  async function copyText(text, successMessage) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    showToast(successMessage);
  }

  let toastTimer;
  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('show'), 1800);
  }

  boot();
})();
