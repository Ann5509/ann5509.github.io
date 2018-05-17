$(document).ready(function(){
	
	$(window).resize(function() {
		var wdth= $(window).width();
		if (wdth>=992) {
			$( ".navbar-mb-content" ).hide();
			$( ".hamburger" ).removeClass("active");
			$( ".navbar-mb-content" ).animate({right: "-100%"}, 200 ); 
			$( ".overlay" ).removeClass("menu_open");
		}
    });

	var navWidth = $('.navbar-mb-content').width();
	$( ".navbar-mb-content" ).css({
		right: -navWidth
	});

	$( ".menu-switch" ).on( "click", function() {
		if(!$('.hamburger').hasClass('active')) { 
			$( ".hamburger" ).addClass("active");
			$( ".navbar-mb-content" ).css({display: 'block'}).animate({right: "0px"}, 200 );
			$( ".overlay" ).addClass("menu_open");
		}else{
			$( ".hamburger" ).removeClass("active");
			$( ".navbar-mb-content" ).animate({right: "-100%"}, 200 ); 
			$( ".overlay" ).removeClass("menu_open");
		}
	});
	$(".overlay").click(function(){
		$( ".hamburger" ).removeClass("active");
		$( ".navbar-mb-content" ).animate({right: "100%"}, 200 );
		$( ".overlay" ).removeClass("menu_open");
	});

	$('.navbar-mb-content a').click(function(){
        $( ".hamburger" ).removeClass("active");
		$( ".navbar-mb-content" ).animate({right: "-100%"}, 200 );
		$( ".overlay" ).removeClass("menu_open");
    });

	
	$('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

});
