const reviewsShowcase = document.querySelector(".reviews__showcase");
let reviews = [];

const loadReviews = async () => {
  const response = await fetch("./assets/data/reviews.json");
  const data = await response.json();
  reviews = data.reviews;
  displayReviews();
};

const displayReviews = () => {
  reviews.forEach((review) => {
    reviewsShowcase.innerHTML += `
    <div class="review">
      <div class="review__header">
        <img src="${review.image}" alt="${review.stars}" />
        <div class="review__user">
          <span class="material-symbols-outlined">account_circle</span>
          <p class="review__user--name">${review.user}</p>
        </div>
        <p class="review__date">${review.date}</p>
      </div>
      <div class="review__body" draggable="false">
        <p>${review.content}</p>
      </div>
    </div>
    `;
  });
};

loadReviews();
