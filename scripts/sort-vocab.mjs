import { readFileSync, writeFileSync } from 'fs';

const filePath = new URL('../src/data/vocabulary.js', import.meta.url).pathname;

let content = readFileSync(filePath, 'utf8');

// Extract the array content between the first '[' and last ']'
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
const header = content.slice(0, startIdx + 1);
const footer = content.slice(endIdx);
const arrayBody = content.slice(startIdx + 1, endIdx);

// Parse individual entries by splitting on },\n  {
// We use a regex to extract each object literal
const entryRegex = /\{[^{}]*\}/g;
const entries = arrayBody.match(entryRegex);

if (!entries) {
  console.error('No entries found!');
  process.exit(1);
}

console.log(`Found ${entries.length} entries`);

// Sort by the word field
entries.sort((a, b) => {
  const wordA = a.match(/word:\s*"([^"]+)"/)?.[1] ?? '';
  const wordB = b.match(/word:\s*"([^"]+)"/)?.[1] ?? '';
  return wordA.localeCompare(wordB);
});

// Re-assign IDs sequentially
const sortedEntries = entries.map((entry, idx) => {
  return entry.replace(/id:\s*\d+/, `id: ${idx + 1}`);
});

// Reconstruct the file
const newContent =
  header +
  '\n  ' +
  sortedEntries.join(',\n  ') +
  '\n' +
  footer;

writeFileSync(filePath, newContent, 'utf8');
console.log('Done! vocabulary.js has been sorted alphabetically.');
