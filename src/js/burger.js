//mmmmmmmmenu
jQuery(document).ready(function() {
	var mynav = $( "#nav-mobile" )[0];
	const menu = new MmenuLight(
			mynav
		); 
	const navigator = menu.navigation();
	const drawer = menu.offcanvas();
	navigator.openPanel(
			mynav
		);
	$( 'a[href="#nav-mobile"]' ).on('click mousedown touchstart', function(e){
        e.preventDefault()
        $(this).addClass('is-active');
		drawer.open();
	});
    $('.mm-ocd__backdrop').on('click mousedown touchstart', function(e) {
        e.preventDefault();
        $('a[href="#nav-mobile"]').removeClass('is-active');
        $(this).find('.nav__submenu').css('opacity', 0);
    });


//submenus too just for fun
	$('.nav--main').find('.nav__submenu').addClass('close');
	$('.nav--main').find('.menu-item-has-children').hover(function(){
		$(this).toggleClass('hovered');
		$(this).find('.nav__submenu').toggleClass("close");
		$(this).find('.nav__submenu').toggleClass("open");
	});
});



