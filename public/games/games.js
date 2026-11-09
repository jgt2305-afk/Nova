const grid = document.querySelector('#games-grid');
const search = document.querySelector('#games-search');
const count = document.querySelector('#games-count');
const empty = document.querySelector('#games-empty');
const loadError = document.querySelector('#games-load-error');
let games = [];

function renderGames() {
  const query = search.value.trim().toLocaleLowerCase();
  const visible = games.filter((game) => game.title.toLocaleLowerCase().includes(query));
  grid.replaceChildren();
  for (const game of visible) {
    const card = document.createElement('a');
    card.className = 'game-card';
    card.href = game.file;
    card.setAttribute('aria-label', `Play ${game.title}`);
    const logo = document.createElement('img');
    logo.className = 'game-logo';
    logo.src = game.logo;
    logo.alt = `${game.title} logo`;
    logo.loading = 'lazy';
    const title = document.createElement('span');
    title.className = 'game-title';
    title.textContent = game.title;
    card.append(logo, title);
    grid.append(card);
  }
  empty.hidden = visible.length !== 0;
  count.textContent = query ? `${visible.length} of ${games.length} games` : `${games.length} offline games`;
}

search.addEventListener('input', renderGames);
fetch('/games.json')
  .then((response) => {
    if (!response.ok) throw new Error(`Games list returned ${response.status}`);
    return response.json();
  })
  .then((items) => {
    games = Array.isArray(items) ? items : [];
    renderGames();
  })
  .catch((error) => {
    console.error('Could not load Nova games:', error);
    count.textContent = 'Games unavailable';
    loadError.hidden = false;
  });
