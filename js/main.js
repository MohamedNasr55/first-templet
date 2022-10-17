$(function() {
    'use strict';
    var winh = $(window).height(),
        upper = $('.upper-bar').innerHeight(),
        nav = $('.navbar').innerHeight();
    $('.slider , .carousel-item').height(winh - (upper + nav));
});