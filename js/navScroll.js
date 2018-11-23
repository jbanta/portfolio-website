var curnav;
var $window = $(window);
var newsect = false;
var navIndiPos = [$('#logo-sidebar').offset().top - $window.scrollTop() + 22,
                  $('#nav-work').offset().top - $window.scrollTop() - 6,
                  $('#nav-about').offset().top - $window.scrollTop() - 6,
                  $('#nav-contact').offset().top - $window.scrollTop() - 6]


//change indicator based on scrolling
$(window).scroll(function() {
  //window scrolled to hero
  if($window.scrollTop() >= $('#section-hero').offset().top && $window.scrollTop() < $('#section-work').offset().top - 300) {
    $('.nav-indicator').animate({ top: navIndiPos[0] }, 0);
  }

  //window scrolled to work
  if ($window.scrollTop() >= $('#section-work').offset().top - 300 && $window.scrollTop() < $('#section-about').offset().top - 300) {
    $('.nav-indicator').animate({ top: navIndiPos[1] }, 0);
  }

  //window scrolled to about
  if ($window.scrollTop() >= $('#section-about').offset().top - 300 && $window.scrollTop() < $('#section-contact').offset().top - 300) {
    $('.nav-indicator').animate({ top: navIndiPos[2] }, 0);
  }

  //window scrolled to contact
  if ($window.scrollTop() >= $('#section-contact').offset().top - 300) {
    $('.nav-indicator').animate({ top: navIndiPos[3] }, 0);
  }
});


$("#logo-sidebar").click(function() {
    $('html, body').animate({
        scrollTop: $('#section-hero').offset().top
    }, 300);

    $('.nav-indicator').animate({
        top: navIndiPos[0]
    }, 300);
});

$("#nav-work").click(function() {
    $('html, body').animate({
        scrollTop: $('#section-work').offset().top
    }, 300);

    $('.nav-indicator').animate({
        top: navIndiPos[1]
    }, 300);
});

$("#nav-about").click(function() {
    $('html, body').animate({
        scrollTop: $('#section-about').offset().top
    }, 300);

    $('.nav-indicator').animate({
        top: navIndiPos[2]
    }, 300);
});

$("#nav-contact").click(function() {
    $('html, body').animate({
        scrollTop: $('#section-contact').offset().top
    }, 300);

    $('.nav-indicator').animate({
        top: navIndiPos[3]
    }, 300);
});



if($window.scrollTop() >= $('#section-hero').offset().top && $window.scrollTop() < $('#section-work').offset().top) {
  $('.nav-indicator').animate({ top: navIndiPos[0] }, 0);
}

//window scrolled to work
if ($window.scrollTop() >= $('#section-work').offset().top && $window.scrollTop() < $('#section-about').offset().top) {
  $('.nav-indicator').animate({ top: navIndiPos[1] }, 0);
}

//window scrolled to about
if ($window.scrollTop() >= $('#section-about').offset().top && $window.scrollTop() < $('#section-contact').offset().top - 200) {
  $('.nav-indicator').animate({ top: navIndiPos[2] }, 0);
}

//window scrolled to contact
if ($window.scrollTop() >= $('#section-contact').offset().top - 200) {
  $('.nav-indicator').animate({ top: navIndiPos[3] }, 0);
}
