/* SELECT ELEMENTS */
const switchControlLeft = document.querySelector(".switch__slider--left");
const switchControlRight = document.querySelector(".switch__slider--right");
const playstationControlLeft = document.querySelector(".playstation__slider--left");
const playstationControlRight = document.querySelector(".playstation__slider--right");
const xboxControlLeft = document.querySelector(".xbox__slider--left");
const xboxControlRight = document.querySelector(".xbox__slider--right");
const pcControlLeft = document.querySelector(".pc__slider--left");
const pcControlRight = document.querySelector(".pc__slider--right");

/* ADD EVENT LISTENER TO PLAYSTATION, SWITCH, XBOX AND PC'S LEFT CONTROL, 
ON CLICK IT SCROLLS ONE CARD TO LEFT IN THE CURRENT SLIDER */
playstationControlLeft.addEventListener("click", () => {
  playstationCards.scrollLeft -= 300;
});

switchControlLeft.addEventListener("click", () => {
  switchCards.scrollLeft -= 300;
});

xboxControlLeft.addEventListener("click", () => {
  xboxCards.scrollLeft -= 300;
});

pcControlLeft.addEventListener("click", () => {
  pcCards.scrollLeft -= 300;
});

/* ADD EVENT LISTENER TO PLAYSTATION, SWITCH, XBOX AND PC'S RIGHT CONTROL, 
ON CLICK IT SCROLLS ONE CARD TO RIGHT IN THE CURRENT SLIDER */
playstationControlRight.addEventListener("click", () => {
  playstationCards.scrollLeft += 300;
});

switchControlRight.addEventListener("click", () => {
  switchCards.scrollLeft += 300;
});

xboxControlRight.addEventListener("click", () => {
  xboxCards.scrollLeft += 300;
});

pcControlRight.addEventListener("click", () => {
  pcCards.scrollLeft += 300;
});

/* TOUCH SLIDER */
let startX = 0;
let grab = false;

switchCards.addEventListener("mousedown", function (e) {
  startX = e.clientX;
  grab = true;
});

playstationCards.addEventListener("mousedown", function (e) {
  startX = e.clientX;
  grab = true;
});

xboxCards.addEventListener("mousedown", function (e) {
  startX = e.clientX;
  grab = true;
});

pcCards.addEventListener("mousedown", function (e) {
  startX = e.clientX;
  grab = true;
});

switchCards.addEventListener("mouseleave", function (e) {
  grab = false;
});

playstationCards.addEventListener("mouseleave", function (e) {
  grab = false;
});

xboxCards.addEventListener("mouseleave", function (e) {
  grab = false;
});

pcCards.addEventListener("mouseleave", function (e) {
  grab = false;
});

switchCards.addEventListener("mousemove", function (e) {
  if (!grab) {
    return;
  }

  this.scrollLeft += startX - e.clientX;
});

playstationCards.addEventListener("mousemove", function (e) {
  if (!grab) {
    return;
  }

  this.scrollLeft += startX - e.clientX;
});

xboxCards.addEventListener("mousemove", function (e) {
  if (!grab) {
    return;
  }

  this.scrollLeft += startX - e.clientX;
});

pcCards.addEventListener("mousemove", function (e) {
  if (!grab) {
    return;
  }

  this.scrollLeft += startX - e.clientX;
});

window.addEventListener("mouseup", function (e) {
  grab = false;
});
