$(window).load(function() {
  // Open Overlay
  $(".uicol-thumbnail").click(function() {
      var itemNum = this.id.split('-')[1];
      $('#overlay-' + itemNum).fadeIn();
      $('body').css("overflow", "hidden");
  });

  //Close Overlay
  $(".uicol-close-x").click(function() {
      $('.uicol-overlay-container').fadeOut();
      $('body').css("overflow-y", "scroll");
  });

  //Opens Overlay if specific item was linked
  var itemNum = window.location.hash.substring(1).split('-')[0];
  if (itemNum) {
    $('#overlay-' + itemNum).fadeIn();
    $('body').css("overflow", "hidden");
  }

});
