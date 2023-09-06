/* SELECT ELEMENT */
const newsShowcase = document.querySelector(".news__showcase");

/* NEWS ARRAY */
let news = [];

/* LOAD NEWS FROM NEWS.JSON USING FETCH, READ AND PARSE THEM USING JSON(), 
PUSH THE RESULT INTO NEWS ARRAY, THEN RENDER IT BY CALLING DISPLAYNEWS()*/
const loadNews = async () => {
  const response = await fetch("./assets/data/news.json");
  const data = await response.json();
  news = data.news;
  displayNews();
};

/* ITERATE OVER NEWS ARRAY, THEN PUSH A CARD 
TEMPLATE OF THE CURRENT NEW INTO NEWS SHOWCASE */
const displayNews = () => {
  news.forEach((latestNew) => {
    newsShowcase.innerHTML += `
    <div class="new">
      <img src="${latestNew.image}" class="new__img" alt="${latestNew.title}" />
      <div class="new__text">
        <p class="new__date">${latestNew.date}</p>
        <p class="new__title">${latestNew.title}</p>
      </div>
    </div>
    `;
  });
};

/* RUN LOADNEWS()*/
loadNews();
