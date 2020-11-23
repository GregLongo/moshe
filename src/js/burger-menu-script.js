jQuery(document).ready(function() {
    console.log('ifired');
     var $hamburger = $(".hamburger");
	  $hamburger.on("click", function(e) {
	    $hamburger.toggleClass("is-active");
	    // Do something else, like open/close menu
	    $(".nav").toggleClass("is-active");
	   	$(".page-template").toggleClass("push");
	  });

});