/* SELECT ELEMENTS */
const playstationCards = document.querySelector(".playstation__cards");
const switchCards = document.querySelector(".switch__cards");
const storeCards = document.querySelector(".store__cards");
const xboxCards = document.querySelector(".xbox__cards");
const pcCards = document.querySelector(".pc__cards");

/* GAMES ARRAYS */
let playstationGames = [];
let switchGames = [];
let xboxGames = [];
let pcGames = [];
let games = [];

/* LOAD GAMES FROM GAMES.JSON USING FETCH, READ AND PARSE THEM USING JSON(), PUSH THE RESULT 
INTO GAMES ARRAY, THEN RENDER IT BY CALLING DISPLAYHOMEGAMES() AND DISPLAYSTOREGAMES() */
const loadGames = async () => {
  const response = await fetch("./assets/data/games.json");
  const data = await response.json();
  games = data.games;
  displayHomeGames();
  displayStoreGames();
};

/* DISPLAY HOME SECTION'S GAMES */
const displayHomeGames = () => {
  /* ITERATE OVER GAMES ARRAY */
  for (let i = 0; i < games.length; i++) {
    /* CHECK IF CURRENT GAME'S PLATFORM IS PLAYSTATION, 
    IF IT'S TRUE THEN PUSH IT TO SWITCH GAMES ARRAY */
    if (games[i].platform == "playstation") {
      playstationGames.push(games[i]);
    }
    /* CHECK IF CURRENT GAME'S PLATFORM IS SWITCH, 
    IF IT'S TRUE THEN PUSH IT TO SWITCH GAMES ARRAY */
    if (games[i].platform == "switch") {
      switchGames.push(games[i]);
    }
    /* CHECK IF CURRENT GAME'S PLATFORM IS XBOX, 
    IF IT'S TRUE THEN PUSH IT TO SWITCH GAMES ARRAY */
    if (games[i].platform == "xbox") {
      xboxGames.push(games[i]);
    }
    /* CHECK IF CURRENT GAME'S PLATFORM IS PC, 
    IF IT'S TRUE THEN PUSH IT TO SWITCH GAMES ARRAY */
    if (games[i].platform == "pc") {
      pcGames.push(games[i]);
    }
  }

  /* ITERATE OVER PLAYSTATION, SWITCH, XBOX 
  AND PC GAMES ARRAYS 9 TIMES EACH ONE */
  for (let i = 0; i < 9; i++) {
    /* PUSH A CARD TEMPLATE OF THE CURRENT GAME INTO PLAYSTATION CARDS */
    playstationCards.innerHTML += `
        <div class="card">
          <img src="${playstationGames[i].image}" draggable="false" class="card__image" alt="${playstationGames[i].title}" />
          <p class="card__title">${playstationGames[i].title}</p>
          <div class="card__genres">
            <p class="card__genre">${playstationGames[i].genres[0]}</p>
            <p class="card__genre">${playstationGames[i].genres[1]}</p>
          </div>
          <div class="card__bottom">
            <div class="card__price">
              <p class="card__price--final">${playstationGames[i].prices.final}</p>
              <p class="card__price--base">${playstationGames[i].prices.base}</p>
            </div>
            <button class="card__cart">
              <span class="material-symbols-outlined">shopping_cart</span>
            </button>
          </div>
        </div>
        `;

    /* PUSH A CARD TEMPLATE OF THE CURRENT GAME INTO SWITCH CARDS */
    switchCards.innerHTML += `
    <div class="card">
      <img src="${switchGames[i].image}" draggable="false" class="card__image" alt="${switchGames[i].title}" />
      <p class="card__title">${switchGames[i].title}</p>
      <div class="card__genres">
        <p class="card__genre">${switchGames[i].genres[0]}</p>
        <p class="card__genre">${switchGames[i].genres[1]}</p>
      </div>
      <div class="card__bottom">
        <div class="card__price">
          <p class="card__price--final">${switchGames[i].prices.final}</p>
          <p class="card__price--base">${switchGames[i].prices.base}</p>
        </div>
        <button class="card__cart">
          <span class="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
    </div>
    `;

    /* PUSH A CARD TEMPLATE OF THE CURRENT GAME INTO XBOX CARDS */
    xboxCards.innerHTML += `
    <div class="card">
      <img src="${xboxGames[i].image}" draggable="false" class="card__image" alt="${xboxGames[i].title}" />
      <p class="card__title">${xboxGames[i].title}</p>
      <div class="card__genres">
        <p class="card__genre">${xboxGames[i].genres[0]}</p>
        <p class="card__genre">${xboxGames[i].genres[1]}</p>
      </div>
      <div class="card__bottom">
        <div class="card__price">
          <p class="card__price--final">${xboxGames[i].prices.final}</p>
          <p class="card__price--base">${xboxGames[i].prices.base}</p>
        </div>
        <button class="card__cart">
          <span class="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
    </div>
    `;

    /* PUSH A CARD TEMPLATE OF THE CURRENT GAME INTO PC CARDS */
    pcCards.innerHTML += `
    <div class="card">
      <img src="${pcGames[i].image}" draggable="false" class="card__image" alt="${pcGames[i].title}" />
      <p class="card__title">${pcGames[i].title}</p>
      <div class="card__genres">
        <p class="card__genre">${pcGames[i].genres[0]}</p>
        <p class="card__genre">${pcGames[i].genres[1]}</p>
      </div>
      <div class="card__bottom">
        <div class="card__price">
          <p class="card__price--final">${pcGames[i].prices.final}</p>
          <p class="card__price--base">${pcGames[i].prices.base}</p>
        </div>
        <button class="card__cart">
          <span class="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
    </div>
    `;
  }
};

/* ITERATE OVER GAMES ARRAY, THEN PUSH A CARD 
TEMPLATE OF THE CURRENT GAME INTO STORE CARDS */
const displayStoreGames = () => {
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

/* RUN LOADGAMES() */
loadGames();
