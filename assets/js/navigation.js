const headerHome = document.getElementById("header__home");
const navHome = document.getElementById("nav__home");
const navStore = document.getElementById("nav__store");
const navCart = document.getElementById("nav__cart");
const bannerStore = document.getElementById("banner__store");
const homeSection = document.getElementById("home");
const storeSection = document.getElementById("store");
const cartSection = document.getElementById("cart");

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

headerHome.addEventListener("click", () => {
  homeSection.style.display = "block";
  storeSection.style.display = "none";
  cartSection.style.display = "none";
  scrollToTop();
});

navHome.addEventListener("click", () => {
  homeSection.style.display = "block";
  storeSection.style.display = "none";
  cartSection.style.display = "none";
  scrollToTop();
});

navStore.addEventListener("click", () => {
  homeSection.style.display = "none";
  storeSection.style.display = "block";
  cartSection.style.display = "none";
  scrollToTop();
});

navCart.addEventListener("click", () => {
  homeSection.style.display = "none";
  storeSection.style.display = "none";
  cartSection.style.display = "block";
  scrollToTop();
});

bannerStore.addEventListener("click", () => {
  homeSection.style.display = "none";
  storeSection.style.display = "block";
  cartSection.style.display = "none";
  scrollToTop();
});
