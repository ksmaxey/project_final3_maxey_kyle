$(document).ready(function () {
    $('#nav-mobile').html($('#nav-main').html());
    $('#nav-trigger span').click(function () {
        if ($('nav#nav-mobile ul').hasClass('expanded')) {
            $('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
            $(this).removeClass('open');
        } else {
            $('nav#nav-mobile ul').addClass('expanded').slideDown(250);
            $(this).addClass('open');
        }
    });
});

//Slide Show Plugin

$(document).ready(function () {
    $('.rslides').responsiveSlides();
});

//Custom jQuery code

$('#phone').click(function () {
    $('#phone').html('555-123-4567');
});

$('#email').click(function () {
    $('#email').html('sweets@wreckit.com');
});
