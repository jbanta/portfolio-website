setInterval(loop, 1500);

var i = 0
var titles = ["UI / UX Design", "Product Design", "Branding Design", "Front-End Development"]

function loop( ) {
  i += 1;
  $("#subtitle-hero").css("display", "none");
  $('#subtitle-hero').html(titles[i % titles.length ]);
  $('#subtitle-hero').fadeIn(100);
}
