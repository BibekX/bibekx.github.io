// NAVIGATION APPEAR ON SCROLL
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 200);
});

