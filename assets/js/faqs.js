/* SELECT ELEMENT */
const faqs = document.querySelectorAll(".faq");

/* ADD AN EVENT LISTENER TO EACH FAQ FROM FAQS 
NODE LIST TO TOGGLE THE "ACTIVE" CLASS ON CLIK */
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
