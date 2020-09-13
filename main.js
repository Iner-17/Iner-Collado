$("#contactForm").click(function () {
  $(".contact-form").toggleClass("show-contact-form");
  $(".nav-links").toggleClass("show-nav-links");
});

$(".fa-times").click(function () {
  $(".contact-form").toggleClass("show-contact-form");
});

$(".menu-bar").click(function () {
  $(".nav-links").toggleClass("show-nav-links");
});
