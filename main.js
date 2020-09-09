const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("click", () => {
  document.querySelector(".contact-form").style.display = "block";
  document.querySelector(".container").style.filter = "blur(5px)";
});

document.querySelector(".fa-times").onclick = () => {
  document.querySelector(".contact-form").style.display = "none";
  document.querySelector(".container").style.filter = "blur(0px)";
};
