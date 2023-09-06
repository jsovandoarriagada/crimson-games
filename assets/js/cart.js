/* SELECT ELEMENTS */
const cartEmpty = document.querySelector(".cart__empty");
const cartShowcase = document.querySelector(".cart__showcase");
const cartCardQuantity = document.getElementById("cart__card--quantity");
const navCartCount = document.getElementById("nav__cart--count");
const summaryItems = document.getElementById("summary__items--span");
const summaryFull = document.getElementById("summary__full--span");
const summaryDiscount = document.getElementById("summary__discount--span");
const summaryTotal = document.getElementById("summary__total--span");

/* CART ARRAY + LOCAL STORAGE */
let cart = JSON.parse(localStorage.getItem("CART")) || [];

/* ADD TO CART FUNCTION */
const addToCart = (id) => {
  /* IF ITEM IS IN CART ARRAY, THEN USE AN 
  "ALREADY IN CART" TOASTIFY NOTIFICATION*/
  if (cart.some((item) => item.id === id)) {
    Toastify({
      text: "ALREADY IN CART",
      duration: 2000,
      style: {
        textShadow: "none",
        background: "#dd4e53",
        color: "#000000",
        fontWeight: "500",
        boxShadow: "none",
        border: "none",
        minWidth: "max-content",
        borderRadius: "10px",
      },
      offset: {
        y: 50,
      },
    }).showToast();
    /* IF ITEM IS NOT IN CART ARRAY PUSH IT AND ADD QUANTITY PROPERTY 
    TO IT, THEN USE A "SUCCESSFULLY ADDED" TOASTIFY NOTIFICATION */
  } else {
    const item = games.find((game) => game.id === id);
    cart.push({ ...item, quantity: 1 });
    Toastify({
      text: "SUCCESSFULLY ADDED",
      duration: 2000,
      style: {
        textShadow: "none",
        background: "#618bf8",
        color: "#161618",
        fontWeight: "500",
        boxShadow: "none",
        border: "none",
        minWidth: "max-content",
        borderRadius: "10px",
      },
      offset: {
        y: 50,
      },
    }).showToast();
  }
  /* RUN UPDATECARTITEMS() */
  updateCartItems();
};

/* UPDATE CART ITEMS */
const updateCartItems = () => {
  displayCartContent();
  displayNavCartCount();
  displayCartItems();
  displayItemCount();
  displayFullPrice();
  displayDiscount();
  displayTotal();
  /* SAVE CART TO LOCALSTORAGE */
  localStorage.setItem("CART", JSON.stringify(cart));
};

/* DISPLAY CART ITEMS FUNCTION */
const displayCartItems = () => {
  /* SET HTML CONTENT TO EMPTY ON CART SHOWCASE */
  cartShowcase.innerHTML = "";
  /* USE A FUNCTION ON EACH ITEM OF CART ARRAY */
  cart.forEach((item) => {
    /* SET HTML CONTENT ON CART ITEMS ELEMENT */
    cartShowcase.innerHTML += `
        <div class="cart__card">
          <div class="cart__card--start">
            <img src="${item.image}" alt="${item.title}" class="cart__card--img" />
          </div>
          <div class="cart__card--controls">
            <button onclick="changeCartItemsQuantity('minus', ${item.id})"><span class="material-symbols-outlined">remove</span></button>
            <p id="cart__card--quantity">${item.quantity}</p>
          <button onclick="changeCartItemsQuantity('plus', ${item.id})"><span class="material-symbols-outlined">add</span></button>
        </div>
        <div class="cart__card--end">
          <p class="cart__card--price">$${item.prices.final * item.quantity}<span>$${item.prices.base * item.quantity}</span></p>
          <button class="cart__card--delete" onclick="removeItemFromCart(${item.id})">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    `;
  });
};

/* DISPLAY CART CONTENT */
const displayCartContent = () => {
  if (cart.length == 0) {
    cartEmpty.style.display = "grid";
    cartShowcase.style.display = "none";
  } else {
    cartEmpty.style.display = "none";
    cartShowcase.style.display = "grid";
  }
};

/* DISPLAY NAV'S CART COUNT */
const displayNavCartCount = () => {
  let cartCount = 0;

  if (cart.length == 0) {
    navCartCount.style.display = "none";
  }

  if (cart.length > 0) {
    cart.forEach((item) => {
      cartCount += item.quantity;
    });
    navCartCount.innerHTML = cartCount;
    navCartCount.style.display = "grid";
  }
};

/* DISPLAY SUMMARY'S ITEM COUNT */
const displayItemCount = () => {
  let itemCount = 0;
  cart.forEach((item) => {
    itemCount += item.quantity;
  });
  summaryItems.innerHTML = itemCount;
};

/* DISPLAY SUMMARY'S FULL PRICE */
const displayFullPrice = () => {
  let fullPrice = 0;
  cart.forEach((item) => {
    fullPrice += item.prices.base * item.quantity;
  });
  summaryFull.innerHTML = fullPrice;
};

/* DISPLAY SUMMARY'S DISCOUNT */
const displayDiscount = () => {
  let discount = 0;
  cart.forEach((item) => {
    discount += item.prices.base * item.quantity - item.prices.final * item.quantity;
  });
  summaryDiscount.innerHTML = discount;
};

/* DISPLAY SUMMARY'S TOTAL PRICE */
const displayTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.prices.final * item.quantity;
  });
  summaryTotal.innerHTML = total;
};

/* CHANGE CART ITEMS QUANTITY FUNCTION */
const changeCartItemsQuantity = (operator, id) => {
  /* SET CART ARRAY AS THE RESULT OF EXECUTE A CALLBACK FUNCTION ON EACH ITEM OF IT */
  cart = cart.map((item) => {
    /* SET QUANTITY VARIABLE AS ITEM'S QUANTITY PROPERTY VALUE */
    let quantity = item.quantity;
    if (item.id === id) {
      /* IF OPERATOR IS "MINUS" AND QUANTITY IS GREATER THAN 1, THEN DECREASE QUANTITY BY 1 */
      if (operator === "minus" && quantity > 1) quantity--;
      /* IF OPERATOR IS "PLUS", THEN INCREASE QUANTITY BY 1 */
      if (operator === "plus") quantity++;
    }
    /* RETURN AN OBJECT WITH ITEM ON IT AND ITS QUANTITY */
    return { ...item, quantity };
  });
  /* USE UPDATE CART ITEMS FUNCTION */
  updateCartItems();
};

/* REMOVE ITEM FROM CART ARRAY */
const removeItemFromCart = (id) => {
  /* SET CART ARRAY AS THE RESULT OF FILTER EACH ITEM WHOSE ID IS NOT THE ONE THAT WILL BE REMOVED */
  cart = cart.filter((item) => item.id !== id);
  /* USE UPDATE CART ITEMS FUNCTION */
  updateCartItems();
};

/* CLEAR CART ITEMS FUNCTIONS */
const clearCartItems = () => {
  /* SET CART ARRAY AS EMPTY */
  cart = [];
  /* USE UPDATE CART ITEMS FUNCTION */
  updateCartItems();
};

/* USE UPDATE CART ITEMS FUNCTION */
updateCartItems();
