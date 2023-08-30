const newsShowcase = document.querySelector(".news__showcase");
let news = [];

const loadNews = async () => {
  const response = await fetch("./assets/data/news.json");
  const data = await response.json();
  news = data.news;
  displayNews();
};

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

loadNews();
