$(function() {
    $('.nav-link').click(function() {
        var name = $(this).attr('name');

        $('.restaurants-image').css('order', 1);
        $('body').find('#' + name).css('order', 0);
    })
});
