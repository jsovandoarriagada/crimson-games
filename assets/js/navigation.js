const headerHome = document.getElementById("header__home");
const navHome = document.getElementById("nav__home");
const navAccount = document.getElementById("nav__account");
const navStore = document.getElementById("nav__store");
const navCart = document.getElementById("nav__cart");
const bannerStore = document.getElementById("banner__store");
const home = document.getElementById("home");
const account = document.getElementById("account");
const store = document.getElementById("store");
const cart = document.getElementById("cart");
let startX = 0;
let grab = false;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

headerHome.addEventListener("click", () => {
  home.style.display = "block";
  account.style.display = "none";
  store.style.display = "none";
  cart.style.display = "none";
  scrollToTop();
});

navHome.addEventListener("click", () => {
  home.style.display = "block";
  account.style.display = "none";
  store.style.display = "none";
  cart.style.display = "none";
  scrollToTop();
});

navAccount.addEventListener("click", () => {
  home.style.display = "none";
  account.style.display = "block";
  store.style.display = "none";
  cart.style.display = "none";
  scrollToTop();
});

navStore.addEventListener("click", () => {
  home.style.display = "none";
  account.style.display = "none";
  store.style.display = "block";
  cart.style.display = "none";
  scrollToTop();
});

navCart.addEventListener("click", () => {
  home.style.display = "none";
  account.style.display = "none";
  store.style.display = "none";
  cart.style.display = "block";
  scrollToTop();
});

bannerStore.addEventListener("click", () => {
  home.style.display = "none";
  account.style.display = "none";
  store.style.display = "block";
  cart.style.display = "none";
  scrollToTop();
});
