$(function() {
    $('.view-button').click(function() {
        $('#modal-wrapper').show();

        var about = $(this).attr('about');
        var address = $(this).attr('address');
        var review = $(this).attr('review');
        var price = $(this).attr('price');

        $('#modal-content').html('<p>Signature Menu: ' + about + '</p>' + '<p>Address: ' + address + '</p>' + '<p>Rating: ' + review + '</p>' + '<p>Price: ' + price + '</p>');
    });

    $('.close-button').click(function() {
        $('#modal-wrapper').hide();
    })
});
