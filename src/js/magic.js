import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from "gsap"; 
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
// lifesaver https://www.npmjs.com/package/scrollmagic-plugin-gsap

$(document).ready(function(){

	var controller = new ScrollMagic.Controller();
	
	//section titles
	if($('.section-title').length){
			$(".section-title").each(function(){
				new ScrollMagic.Scene({
					triggerElement: this,
					triggerHook: .8,
					duration: "150%",
					offset: 50
				})
				.setClassToggle(this, "magic__fade--basic")
				.addTo(controller);
		});
	}

//Homepage
if($('body.home').length){


	new ScrollMagic.Scene({
		triggerElement: ".slider",
		triggerHook: .2,
		duration: "100%"
	})
	.setTween(".slider__slide", {y:"8%"})
	.addTo(controller);


	new ScrollMagic.Scene({
		triggerElement:".wysiwyg--home",
		triggerHook: .8,
		duration: "150%",
		offset: 50
	})
	.setClassToggle(".wysiwyg__content--home", "magic__fade--basic")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".zoom",
		triggerHook: .8,
		duration: "200%",
		offset: 50
	})
	.setClassToggle(".vczapi-list-zoom-meetings--item", "magic__fade--up")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".zoom",
		triggerHook: .8,
		duration: "200%",
		offset: 50
	})
	.setClassToggle(".zoom__view-schedule", "magic__fade--up")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".class-gallery__item",
		triggerHook: .8,
		duration: "200%",
		offset: 50
	})
	.setClassToggle(".class-gallery__item", "magic__fade--slide")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".anim-section__blurb-1",
		triggerHook: .8,
		duration: "150%",
		offset: 50
	})
	.setClassToggle(".anim-section__blurb-1", "magic__fade--basic")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".anim-section__blurb-2",
		triggerHook: .8,
		duration: "150%",
		offset: 50
	})
	.setClassToggle(".anim-section__blurb-2", "magic__fade--basic")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".anim-section__animation-1",
		triggerHook: .8,
		duration: "150%",
		offset: 50
	})
	.setClassToggle(".anim-section__animation-1", "magic__fade--slide")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".anim-section__animation-2",
		triggerHook: .8,
		duration: "150%",
		offset: 50
	})
	.setClassToggle(".anim-section__animation-2", "magic__fade--slide")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".promo-video",
		triggerHook: .8,
		duration: "150%",
		offset: 50
	})
	.setClassToggle(".promo-video", "magic__fade--basic")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".qotd",
		triggerHook: .8,
		duration: "150%",
		offset: 50
	})
	.setClassToggle(".qotd", "magic__fade--up")
	.addTo(controller);

	$(".parallax-gallery__img").each(function(index){
		var trig = this.parentNode,
		speed =  30 * (index) + '%';
		//speed =  (100 * Math.random()) + '%'; experimental random seeding
		new ScrollMagic.Scene({
			triggerElement: trig ,
			triggerHook: "onEnter",
			duration:'200%'})
		.setTween(this, {y: speed})
		.addTo(controller);
	});

	new ScrollMagic.Scene({
		triggerElement: ".cta-parallax__outer",
		triggerHook: 1,
		duration: "200%"
	})
	.setTween(".cta-parallax", {y:"80%"})
	.addTo(controller);

}
//ClassPage
if ($('body.page-template-class-page').length){
	new ScrollMagic.Scene({
		triggerElement: ".hero__wrapper",
		triggerHook: .2,
		duration: "100%"
	})
	.setTween(".hero--class", {y:"10%"})
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".wysiwyg--class",
		triggerHook: .5,
		duration: "150%",
		offset: 50
	})
	.setClassToggle(".wysiwyg__content--class", "magic__fade--up")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".windowpane__pane--class",
		triggerHook: .6,
		duration: "200%"
	})
	.setTween(".windowpane__img", {y:"20%"})
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".windowpane__pane--class",
		triggerHook: .7,
		duration: "200%",
		offset: 50
	})
	.setClassToggle(".windowpane__pane--class", "magic__fade--basic")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".wysiwyg--class__description",
		triggerHook: .7,
		duration: "100%",
		offset: 50
	})
	.setClassToggle(".wysiwyg--class__description", "magic__fade--basic")
	.addTo(controller);

	// new ScrollMagic.Scene({
	// 	triggerElement:".class-gallery__item",
	// 	triggerHook: .8,
	// 	duration: "150%",
	// 	offset: 50
	// })
	// .setClassToggle(".class-gallery__item", "magic__fade--slide")
	// .addTo(controller);
	$('.class-gallery__item').addClass("magic__fade--slide");

	new ScrollMagic.Scene({
		triggerElement:".qotd",
		triggerHook: .8,
		duration: "150%",
		offset: 50
	})
	.setClassToggle(".qotd", "magic__fade--up")
	.addTo(controller);

}

//About Us Page

if($('.page__title--about').length){
	new ScrollMagic.Scene({
		triggerElement:".wysiwyg--about",
		triggerHook: .9,
		duration: "100%",
		offset: 50
	})
	.setClassToggle(".wysiwyg--about", "magic__fade--basic")
	.addTo(controller);


	new ScrollMagic.Scene({
		triggerElement:".windowpane__pane--about",
		triggerHook: .5,
		duration: "200%",
		offset: -50
	})
	.setClassToggle(".windowpane__pane--about", "magic__fade--basic")
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement:".mission",
		triggerHook: .8,
		duration: "100%",
		offset: 50
	})
	.setClassToggle(".mission__content", "magic__fade--basic")
	.addTo(controller);

}

//service page
if($('.page__title--services').length){
	// new ScrollMagic.Scene({
	// 	triggerElement:".class-gallery__item",
	// 	triggerHook: .8,
	// 	duration: "150%",
	// 	offset: 50
	// })
	// .setClassToggle(".class-gallery__item", "magic__fade--slide")
	// .addTo(controller);
	$('.class-gallery__item').addClass("magic__fade--slide");
}

//schedule page
if($('.page__title--schedule').length){

	new ScrollMagic.Scene({
		triggerElement:".zoom",
		triggerHook: .8,
		duration: "400%",
		offset: 50
	})
	.setClassToggle(".vczapi-list-zoom-meetings--item", "magic__fade--up")
	.addTo(controller);

}


});
