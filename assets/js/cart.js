const cartEmpty = document.querySelector(".cart__empty");
const cartCheckout = document.querySelector(".cart__checkout");
const cartShowcase = document.querySelector(".cart__showcase");
const cartCardQuantity = document.getElementById("cart__card--quantity");
const navCartCount = document.getElementById("nav__cart--count");
const summaryItems = document.getElementById("summary__items--span");
const summaryFull = document.getElementById("summary__full--span");
const summaryDiscount = document.getElementById("summary__discount--span");
const summaryTotal = document.getElementById("summary__total--span");
const statusCart = document.querySelector(".status__cart");
const statusCheckout = document.querySelector(".status__checkout");

let cart = JSON.parse(localStorage.getItem("CART")) || [];

const addToCart = (id) => {
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
  } else {
    const item = games.find((game) => game.id === id);

    if (cart.length == 0) {
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
    } else {
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
      cartEmpty.style.display = "none";
      cartShowcase.style.display = "grid";
      cartCheckout.style.display = "none";
      statusCheckout.classList.remove("status--active");
    }
  }

  updateCartItems();
};

const updateCartItems = () => {
  displayStatusBar();
  displayCartContent();
  displayNavCartCount();
  displayCartItems();
  displayItemCount();
  displayFullPrice();
  displayDiscount();
  displayTotal();
  localStorage.setItem("CART", JSON.stringify(cart));
};

const displayCartItems = () => {
  cartShowcase.innerHTML = "";
  cart.forEach((item) => {
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

const displayCheckout = () => {
  if (cart.length !== 0) {
    statusCheckout.classList.add("status--active");
    cartEmpty.style.display = "none";
    cartShowcase.style.display = "none";
    cartCheckout.style.display = "grid";
  } else {
    Toastify({
      text: "YOUR CART IS EMPTY",
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
  }
};

const displayStatusBar = () => {
  if (cart.length == 0) {
    statusCart.classList.remove("status--active");
    statusCart.style.cursor = "auto";
  } else {
    statusCart.classList.add("status--active");
    statusCart.style.cursor = "pointer";
  }
};

const displayCartContent = () => {
  if (cart.length == 0) {
    cartEmpty.style.display = "grid";
    cartShowcase.style.display = "none";
    cartCheckout.style.display = "none";
  } else {
    cartEmpty.style.display = "none";
    cartShowcase.style.display = "grid";
    cartCheckout.style.display = "none";
  }
};

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

const displayItemCount = () => {
  let itemCount = 0;
  cart.forEach((item) => {
    itemCount += item.quantity;
  });
  summaryItems.innerHTML = itemCount;
};

const displayFullPrice = () => {
  let fullPrice = 0;
  cart.forEach((item) => {
    fullPrice += item.prices.base * item.quantity;
  });
  summaryFull.innerHTML = fullPrice;
};

const displayDiscount = () => {
  let discount = 0;
  cart.forEach((item) => {
    discount += item.prices.base * item.quantity - item.prices.final * item.quantity;
  });
  summaryDiscount.innerHTML = discount;
};

const displayTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.prices.final * item.quantity;
  });
  summaryTotal.innerHTML = total;
};

const changeCartItemsQuantity = (operator, id) => {
  cart = cart.map((item) => {
    let quantity = item.quantity;
    if (item.id === id) {
      if (operator === "minus" && quantity > 1) quantity--;
      if (operator === "plus") quantity++;
    }
    return { ...item, quantity };
  });

  updateCartItems();
};

const removeItemFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  updateCartItems();
};

const clearCartItems = () => {
  cart = [];
  statusCheckout.classList.remove("status--active");
  updateCartItems();
};

statusCart.addEventListener("click", () => {
  if (cart.length == 0) {
    return;
  } else {
    cartEmpty.style.display = "none";
    cartShowcase.style.display = "grid";
    cartCheckout.style.display = "none";
    statusCheckout.classList.remove("status--active");
  }
});

updateCartItems();
