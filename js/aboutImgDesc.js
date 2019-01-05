//initialize
var curImg = 0;
var curImgID = "#about-img-0";
$(curImgID).addClass("about-img-outline");
// $(curImgID).css("border-color", "rgba(255,255,255,1)");

var desc = [
  "Boxing for the Cal Boxing Team",
  "Me and my dog, Jaxx",
  "I like making my own stickers!",
  "Chillin' on a cliff at the Grand Canyon",
  "Pasta I made from scratch"
];


// $('#about-img-desc').html(desc[curImg]);

// //when user isn't hovering
// var looper = autoLoop();

//if user hovers image, outline corresponding image and display corresponding description
$( ".about-img" ).hover( function() {
  // clearInterval(looper);
  removeAllOutlines();
  curImgID = this.id;
  curImg = curImgID[curImgID.length-1];
  console.log(curImgID);
  $('#' + curImgID).css("border-color", "rgba(255,255,255,1)");
  $('#about-img-desc').html(desc[curImg]);
});

// function autoLoop() {
//   setInterval(function(){
//     $('#about-img-desc').fadeOut(200) //fade out description of prev image
//     $(curImgID).css("border-color", "rgba(255,255,255,0)");//removes border of prev img
//
//     curImg = (curImg + 1) % 5; // iterate image number
//     curImgID = "#about-img-" + curImg; //get current img id
//     $(curImgID).css("border-color", "rgba(255,255,255,1)"); //make current img border visible
//
//     setTimeout(function(){ //change description in time with fade in
//       $('#about-img-desc').html(desc[curImg]);
//     }, 200);
//
//     $('#about-img-desc').fadeIn(200)
//   }, 1000);
// }

function removeAllOutlines() {
  $('#about-img-0').css("border-color", "rgba(255,255,255,0)");
  $('#about-img-1').css("border-color", "rgba(255,255,255,0)");
  $('#about-img-2').css("border-color", "rgba(255,255,255,0)");
  $('#about-img-3').css("border-color", "rgba(255,255,255,0)");
  $('#about-img-4').css("border-color", "rgba(255,255,255,0)");
}
