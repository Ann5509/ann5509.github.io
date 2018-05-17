$(document).ready(function() {

    $('.back-to-top').click(function() {
        $('body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1400);
    });

    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    $(".menu-switch").on("click", function() {
        $('.hamburger').toggleClass('active');
        $('.menu-collapse').slideToggle(300);
        $('body').toggleClass('overflow');
    });

    $('.nav-link').on("click", function() {
    	$('.hamburger').toggleClass('active');
    	$('.menu-collapse').slideToggle(300);
        $('body').toggleClass('overflow');
    });

});


function stickyHeader() {
    if ($('.navbar').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.navbar').css('height', '60px');
            $('.menu-collapse').css('top', '60px');
            $('.back-to-top').addClass('show');
            $('.back-to-top').fadeIn(300);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.navbar').css('height', '80px');
            $('.menu-collapse').css('top', '80px');
            // $('.navbar').removeClass('nav-active');
            $('.back-to-top').fadeOut(300);
        }
    };
}

// instance of fuction while Window Scroll event
$(window).scroll(function() {
    stickyHeader();
});