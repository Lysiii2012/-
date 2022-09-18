$('.catalog-mob').click(function () { 
    $('.nav-menu').remove('.show');
    if( $('.catalog-mob').hasClass('.collapsed')) {
        $('.nav-menu').addClass('.show');
    }
});

$(document).mouseup( function(e){ 
	var div = $( ".catalog" ); 
	if ( !div.is(e.target) 
	    && div.has(e.target).length === 0 ) { 
		$('.action-menu').hide(); 
	} else $('.catalog').click(function () {
        $('.action-menu').show();
    });
});

$(document).mouseup( function(e){ 
	var sec_menu = $( ".btn-sec-menu"); 
	if ( !sec_menu.is(e.target)) { 
		$('.second-menu-dec').hide(); 
	} else $(sec_menu).click(function () {
        $('.second-menu-dec').show();
    });
});

