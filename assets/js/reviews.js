/* SELECT ELEMENT */
const reviewsShowcase = document.querySelector(".reviews__showcase");

/* REVIEWS ARRAY */
let reviews = [];

/* LOAD REVIEWS FROM REVIEWSS.JSON USING FETCH, READ AND PARSE THEM USING JSON(), 
PUSH THE RESULT INTO REVIEWS ARRAY, THEN RENDER IT BY CALLING DISPLAYREVIEWS()*/
const loadReviews = async () => {
  const response = await fetch("./assets/data/reviews.json");
  const data = await response.json();
  reviews = data.reviews;
  displayReviews();
};

/* ITERATE OVER REVIEWS ARRAY, THEN PUSH A CARD TEMPLATE 
OF THE CURRENT REVIEW INTO REVIEWS SHOWCASE */
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

/* RUN LOADREVIEWS() */
loadReviews();
