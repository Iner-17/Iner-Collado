const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("click", () => {
  document.querySelector(".contact-form").style.display = "block";
  document.querySelector(".container").style.filter = "blur(5px)";
});

document.querySelector(".fa-times").onclick = () => {
  document.querySelector(".contact-form").style.display = "none";
  document.querySelector(".container").style.filter = "blur(0px)";
};

let openClose = false;
$(".menu-bar").click(() => {
  if (openClose == false) {
    $(".nav-links").css("width", "250px");
    $(".nav-links li").css("display", "block");
    openClose = true;
  } else {
    $(".nav-links").css("width", "0px");
    $(".nav-links li").css("display", "none");
    openClose = false;
  }
});
