import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(here, '../data');
const libraryPath = path.join(dataDir, 'library.json');
const payload = JSON.parse(fs.readFileSync(libraryPath, 'utf8'));

let records;
if (Array.isArray(payload)) {
  records = payload;
} else if (Array.isArray(payload.library)) {
  records = payload.library;
} else if (Array.isArray(payload.recordFiles)) {
  records = payload.recordFiles.map(recordFile => {
    const normalized = recordFile.replace(/^\.\/data\//, '');
    const absolute = path.resolve(dataDir, normalized);
    if (!absolute.startsWith(dataDir + path.sep)) throw new Error(`Unsafe record path: ${recordFile}`);
    return JSON.parse(fs.readFileSync(absolute, 'utf8'));
  });
} else {
  records = null;
}

const errors = [];
const warnings = [];

if (!Array.isArray(records)) {
  errors.push('Top-level payload must contain `library` or `recordFiles`.');
} else {
  const ids = new Set();
  const required = ['id', 'title', 'project', 'category', 'model', 'createdAt', 'access', 'promptAccess', 'video'];

  records.forEach((item, index) => {
    const label = item?.id || `record #${index + 1}`;
    if (!item || typeof item !== 'object') {
      errors.push(`Record #${index + 1} is not an object.`);
      return;
    }

    required.forEach(field => {
      if (item[field] === undefined || item[field] === null || String(item[field]).trim() === '') {
        errors.push(`${label}: missing required field \`${field}\`.`);
      }
    });

    if (item.id) {
      if (ids.has(item.id)) errors.push(`${label}: duplicate id.`);
      ids.add(item.id);
    }

    if (!['free', 'pro'].includes(item.access)) {
      errors.push(`${label}: access must be \`free\` or \`pro\`.`);
    }

    if (!['public', 'redacted'].includes(item.promptAccess)) {
      errors.push(`${label}: promptAccess must be \`public\` or \`redacted\`.`);
    }

    if (item.access === 'free' && item.promptAccess !== 'public') {
      errors.push(`${label}: free records must expose a public-safe starter prompt.`);
    }

    if (item.access === 'pro' && item.promptAccess !== 'redacted') {
      errors.push(`${label}: pro records must be redacted in the public catalog.`);
    }

    if (item.promptAccess === 'public' && (!item.prompt || !String(item.prompt).trim())) {
      errors.push(`${label}: public prompt record must include \`prompt\`.`);
    }

    if (item.promptAccess === 'redacted') {
      if (item.prompt && String(item.prompt).trim()) errors.push(`${label}: REDACTED RECORD LEAK — remove \`prompt\` entirely.`);
      if (item.negativePrompt && String(item.negativePrompt).trim()) errors.push(`${label}: REDACTED RECORD LEAK — remove \`negativePrompt\` entirely.`);
      if (!item.publicSummary || !String(item.publicSummary).trim()) warnings.push(`${label}: redacted record should include a safe publicSummary.`);
    }

    if (item.score !== undefined && item.score !== null) {
      const score = Number(item.score);
      if (!Number.isFinite(score) || score < 0 || score > 100) errors.push(`${label}: score must be between 0 and 100.`);
    }

    const video = String(item.video || '');
    const safeRelativeMedia = video.startsWith('./media/');
    const safeCanonicalMedia = video === `/media/prompt-cinema/${item.id}/preview.mp4`;
    if (video && !safeCanonicalMedia && !safeRelativeMedia && !video.startsWith('https://') && !video.startsWith('data:video/mp4;base64,')) {
      errors.push(`${label}: video must use its canonical /media/prompt-cinema/ ID path, HTTPS, ./media/, or an embedded MP4 data URI.`);
    }

    const poster = String(item.poster || '');
    const safeRelativePoster = poster.startsWith('./media/');
    if (poster && !safeRelativePoster && !poster.startsWith('https://') && !poster.startsWith('data:image/')) {
      errors.push(`${label}: poster must use HTTPS, ./media/, or an embedded image data URI.`);
    }

    if (!Array.isArray(item.tags)) warnings.push(`${label}: tags should be an array.`);
  });
}

warnings.forEach(warning => console.warn(`WARN: ${warning}`));
if (errors.length) {
  errors.forEach(error => console.error(`ERROR: ${error}`));
  console.error(`\nPrompt Cinema validation failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log(`Prompt Cinema validation passed: ${records.length} record(s), ${warnings.length} warning(s).`);
