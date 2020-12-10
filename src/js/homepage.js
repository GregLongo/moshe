//Homepa
window.$ = $;
	jQuery(function($) {
		$('.slider').slick({
		  dots: false,
		  infinite: true,
		  fade: true,
		  speed: 2000,
		  cssEase: 'linear',
		  autoplay: true,
		  autoplaySpeed: 4000,
		  mobileFirst: true,
		  adaptiveHeight: true,
		});

		// move view schedule button inside class list
		$("#schedule-btn").detach().appendTo('.vczapi-list-zoom-meetings--items');
		//move countdown timer
		// $("#dpn-zvc-timer").detach().appendTo('.deepn-zvc-single-featured-img');

});
