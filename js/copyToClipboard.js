if (window.innerWidth > 767) {
    $(".email").hover(function(){
        $(".copyclipboard").html("COPY TO CLIPBOARD");
        $(".copyclipboard").animate({opacity: "1"}, 100);
        $(".email").animate({"background-color": "#343434"}, 100);
    }, function(){
        $(".copyclipboard").animate({opacity: "0"}, 100);
        $(".email").animate({"background-color": "transparent"}, 100);

    });

    $(".email").click(function() {
        var copyText = $("#emailtxt");
          copyText.select();
          document.execCommand("Copy");

        $(".copyclipboard").html("COPIED TO CLIPBOARD");
        $(".copyclipboard").css("display", "none");
        $(".copyclipboard").fadeIn(100);
    });
} else if (window.innerWidth <= 767) {
    $(".email").html("<a href='mailto:johannbanta@gmail.com'>johannbanta@gmail.com</a>");
    $(".email").css("font-size", "20px");
}
