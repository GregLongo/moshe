import $ from 'jquery';
import 'jquery-powertip';
import 'slick-carousel/slick/slick';
import '@fortawesome/fontawesome-free/js/all'
import '@fortawesome/fontawesome-free/js/brands'

//Homepa
window.$ = $;
	jQuery(function($) {
		$('.slider').slick({
		  dots: false,
		  infinite: true,
		  fade: true,
		  speed: 1000,
		  cssEase: 'ease-in',
		  autoplay: true,
		  autoplaySpeed: 4000,
		  mobileFirst: true,
		  adaptiveHeight: true,
		});
});