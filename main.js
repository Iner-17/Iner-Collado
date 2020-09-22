$("#contactForm").click(function () {
  $(".contact-form").toggleClass("show-contact-form");
  $(".nav-links").show();
});

$(".fa-times").click(function () {
  $(".contact-form").toggleClass("show-contact-form");
});

document.querySelector(".menu-bar").onclick = () => {
  let x = document.querySelector("nav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
};
