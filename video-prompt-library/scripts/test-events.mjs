import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const code = readFileSync(new URL('../events.js', import.meta.url), 'utf8');
const pushed = [], dispatched = [];
const window = { dataLayer: pushed, dispatchEvent: event => dispatched.push(event.detail) };
vm.runInNewContext(code, { window, CustomEvent: class { constructor(name, options) { this.detail = options.detail; } } });
const api = window.PromptCinemaEvents;
api.configureCatalog([{ id: 'fv-free', access: 'free', prompt: 'PRIVATE' }, { id: 'fv-pro', access: 'pro', negativePrompt: 'PRIVATE' }]);
assert.equal(api.track('preview_play', 'fv-free', 'card'), true);
assert.equal(api.track('preview_play', 'fv-free', 'detail'), false);
assert.equal(api.track('copy_free_prompt', 'fv-free', 'detail'), true);
assert.equal(api.track('pro_unlock_click', 'fv-pro', 'card'), true);
for (const args of [
  ['copy_free_prompt', 'fv-pro', 'card'], ['pro_unlock_click', 'fv-free', 'card'],
  ['preview_play', 'imported-record', 'card'], ['unknown', 'fv-free', 'card'],
  ['preview_play', 'fv-pro', 'private-query']
]) assert.equal(api.track(...args), false);
assert.equal(pushed.length, 3);
assert.equal(dispatched.length, 3);
for (const payload of [...pushed, ...dispatched]) {
  assert.deepEqual(Object.keys(payload).sort(), ['access', 'event', 'record_id', 'surface']);
  assert.equal(JSON.stringify(payload).includes('PRIVATE'), false);
}
// A broken optional consumer must not break application interaction.
window.dataLayer = { push() { throw new Error('consumer failure'); } };
window.dispatchEvent = () => { throw new Error('listener failure'); };
assert.equal(api.track('pro_unlock_click', 'fv-pro', 'detail'), true);
console.log('Event contract PASS: allowlist, access rules, catalog isolation, play deduplication and consumer failure isolation.');
