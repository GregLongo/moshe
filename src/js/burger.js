jQuery(document).ready(function() {
     var $hamburger = $(".hamburger");
	  $hamburger.on("click", function(e) {
	    $hamburger.toggleClass("push");
	    $(".nav").toggleClass("is-active");
	   	$(".page-template").toggleClass("push");
	  });

});