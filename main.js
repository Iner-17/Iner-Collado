//contact toggle
let contactFormToggle = false;
$("#contactForm").click(() => {
  if (contactFormToggle == false) {
    $(".container").css("filter", "blur(5px)");
    $(".contact-form").css("display", "block");
    $(".nav-links").css("width", "0px");
    $(".nav-links li").css("display", "none");
    $(".container").css("pointer-events", "none");
    contactFormToggle = true;
  }

  if (contactFormToggle == true) {
    $(".fa-times").click(() => {
      $(".container").css("filter", "blur(0px)");
      $(".contact-form").css("display", "none");
      $(".nav-links").css("width", "0px");
      $(".nav-links li").css("display", "none");
      $(".container").css("pointer-events", "all");
      contactFormToggle = false;
    });
  }
});

//Toggle navbar
let openClose = false;
$(".menu-bar").click(() => {
  if (openClose == false) {
    //to open menu bar
    $(".nav-links").css("width", "250px");
    $(".nav-links li").css("display", "block");
    openClose = true;
  } else {
    //to close menu bar
    $(".nav-links").css("width", "0px");
    $(".nav-links li").css("display", "none");
    openClose = false;
  }
});
