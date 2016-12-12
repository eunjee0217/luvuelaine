$(function() {
    var linkText = $('.hamburger-nav').text();

    $('.hamburger-nav').click(function() {
        $('.main-nav').toggle();
        $('.hamburger-nav').text();
    });
});
