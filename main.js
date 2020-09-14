$("#contactForm").click(function () {
  $(".contact-form").toggleClass("show-contact-form");
  $(".nav-links").slideToggle();
});

$(".fa-times").click(function () {
  $(".contact-form").toggleClass("show-contact-form");
});

$(".menu-bar").click(function () {
  $(".nav-links").slideToggle();
});
