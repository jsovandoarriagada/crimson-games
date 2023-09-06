/* SELECT ELEMENTS */
const headerHome = document.getElementById("header__home");
const navHome = document.getElementById("nav__home");
const navStore = document.getElementById("nav__store");
const navCart = document.getElementById("nav__cart");
const bannerStore = document.getElementById("banner__store");
const homeSection = document.getElementById("home");
const storeSection = document.getElementById("store");
const cartSection = document.getElementById("cart");

/* SCROLL TO THE TOP OF THE PAGE */
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

/* ADD EVENT LISTENER TO HEADER'S LOGO, ON CLICK IT SHOWS THE 
HOME SECTION AND HIDES THE REST, THEN RUN SCROLLTOTOP() */
headerHome.addEventListener("click", () => {
  homeSection.style.display = "block";
  storeSection.style.display = "none";
  cartSection.style.display = "none";
  scrollToTop();
});

/* ADD EVENT LISTENER TO NAV'S HOME BUTTON, ON CLICK IT SHOWS 
THE HOME SECTION AND HIDES THE REST, THEN RUN SCROLLTOTOP() */
navHome.addEventListener("click", () => {
  homeSection.style.display = "block";
  storeSection.style.display = "none";
  cartSection.style.display = "none";
  scrollToTop();
});

/* ADD EVENT LISTENER TO NAV'S STORE BUTTON, ON CLICK IT SHOWS 
THE STORE SECTION AND HIDES THE REST, THEN RUN SCROLLTOTOP() */
navStore.addEventListener("click", () => {
  homeSection.style.display = "none";
  storeSection.style.display = "block";
  cartSection.style.display = "none";
  scrollToTop();
});

/* ADD EVENT LISTENER TO NAV'S CART BUTTON, ON CLICK IT SHOWS 
THE CART SECTION AND HIDES THE REST, THEN RUN SCROLLTOTOP() */
navCart.addEventListener("click", () => {
  homeSection.style.display = "none";
  storeSection.style.display = "none";
  cartSection.style.display = "block";
  scrollToTop();
});

/* ADD EVENT LISTENER TO BANNER'S STORE BUTTON, ON CLICK IT SHOWS 
THE STORE SECTION AND HIDES THE REST, THEN RUN SCROLLTOTOP() */
bannerStore.addEventListener("click", () => {
  homeSection.style.display = "none";
  storeSection.style.display = "block";
  cartSection.style.display = "none";
  scrollToTop();
});
