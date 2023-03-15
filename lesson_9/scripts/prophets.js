const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getProphets() {
  const response = await fetch(url);
  const prophets = await response.json();
  return prophets;
  console.table(data.prophets);
}

getProphets();
// Path: lesson_9/scripts/prophets.js