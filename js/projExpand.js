//expands proj content on banner click

var curproj;
var curbtn;
var tophidebtn;

// setTimeout(
//   function() {
    if (window.innerWidth <=820) {
      $(".expand-overlay").css({'height':($(".proj-banner").height()*1.72 +'px')});
    } else {
      $(".expand-overlay").css({'height':($(".proj-banner").height() +'px')});
    }
  // }, 3000);
$( ".expand-overlay").click(function() {
  curproj = "#proj-" + $( this ).attr('id');
  curbtn = "#btn-" + $( this ).attr('id');
  tophidebtn = "#tophide-btn-" + $( this ).attr('id');

  $( curproj ).toggle( "blind", "fast"); //show/hide proj content
  $( curbtn ).toggle( "drop", {direction: "down"}, "fast"); //show button
  $( tophidebtn ).toggle( "drop", {direction: "up"}, "fast"); //top hide button

});

$( ".hideBTN").click(function() {
  curproj = "#proj-" + $( this ).attr('id');
  curbtn = "#btn-" + $( this ).attr('id');
  tophidebtn = "#tophide-btn-" + $( this ).attr('id');

  $( curproj ).toggle( "blind", "fast"); //show/hide proj content
  $( curbtn).toggle( "drop", {direction: "down"}, "fast"); //show/hide button
  $( tophidebtn ).toggle( "drop", {direction: "up"}, "fast"); //top hide button

  $('html, body').animate({
        scrollTop: $(curproj).offset().top - 300 //#DIV_ID is an example. Use the id of your destination on the page
    }, 'fast');
});
