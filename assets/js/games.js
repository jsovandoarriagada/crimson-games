const storeCards = document.querySelector(".store__cards");
let games = [];

const loadGames = async () => {
  const response = await fetch("./assets/data/games.json");
  const data = await response.json();
  games = data.games;
  displayGames();
};

const displayGames = () => {
  games.forEach((game) => {
    if (game.platform == "switch") {
      switchCards.innerHTML += `
      <div class="card">
        <img src="${game.image}" draggable="false" class="card__image" alt="${game.title}" />
        <p class="card__title">${game.title}</p>
        <div class="card__genres">
          <p class="card__genre">${game.genres[0]}</p>
          <p class="card__genre">${game.genres[1]}</p>
        </div>
        <div class="card__bottom">
          <div class="card__price">
            <p class="card__price--final">${game.prices.final}</p>
            <p class="card__price--base">${game.prices.base}</p>
          </div>
          <button class="card__cart">
            <span class="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </div>
      `;
    }
  });

  games.forEach((game) => {
    if (game.platform == "xbox") {
      xboxCards.innerHTML += `
      <div class="card">
        <img src="${game.image}" draggable="false" class="card__image" alt="${game.title}" />
        <p class="card__title">${game.title}</p>
        <div class="card__genres">
          <p class="card__genre">${game.genres[0]}</p>
          <p class="card__genre">${game.genres[1]}</p>
        </div>
        <div class="card__bottom">
          <div class="card__price">
            <p class="card__price--final">${game.prices.final}</p>
            <p class="card__price--base">${game.prices.base}</p>
          </div>
          <button class="card__cart">
            <span class="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </div>
      `;
    }
  });

  games.forEach((game) => {
    if (game.platform == "playstation") {
      playstationCards.innerHTML += `
      <div class="card">
        <img src="${game.image}" draggable="false" class="card__image" alt="${game.title}" />
        <p class="card__title">${game.title}</p>
        <div class="card__genres">
          <p class="card__genre">${game.genres[0]}</p>
          <p class="card__genre">${game.genres[1]}</p>
        </div>
        <div class="card__bottom">
          <div class="card__price">
            <p class="card__price--final">${game.prices.final}</p>
            <p class="card__price--base">${game.prices.base}</p>
          </div>
          <button class="card__cart">
            <span class="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </div>
      `;
    }
  });

  games.forEach((game) => {
    if (game.platform == "pc") {
      pcCards.innerHTML += `
      <div class="card">
        <img src="${game.image}" draggable="false" class="card__image" alt="${game.title}" />
        <p class="card__title">${game.title}</p>
        <div class="card__genres">
          <p class="card__genre">${game.genres[0]}</p>
          <p class="card__genre">${game.genres[1]}</p>
        </div>
        <div class="card__bottom">
          <div class="card__price">
            <p class="card__price--final">${game.prices.final}</p>
            <p class="card__price--base">${game.prices.base}</p>
          </div>
          <button class="card__cart">
            <span class="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </div>
      `;
    }
  });

  games.forEach((game) => {
    storeCards.innerHTML += `
    <div class="card">
      <img src="${game.image}" draggable="false" class="card__image" alt="${game.title}" />
      <p class="card__title">${game.title}</p>
      <div class="card__bottom">
        <div class="card__price">
          <p class="card__price--final">${game.prices.final}</p>
          <p class="card__price--base">${game.prices.base}</p>
        </div>
        <button class="card__cart">
          <span class="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
    </div>
    `;
  });
};

loadGames();
