//mmmmmmmmenu
jQuery(document).ready(function() {
	var mynav = $( "#nav-mobile" )[0];
	const menu = new MmenuLight(
			mynav
		); 
	console.log(menu);
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
        console.log('heyman');
        e.preventDefault();
        $('a[href="#nav-mobile"]').removeClass('is-active');
    });




});


