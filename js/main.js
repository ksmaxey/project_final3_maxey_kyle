//jQuery Plugins

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

$(document).ready(function () {
    if ($('.rslides').length) {
        $('.rslides').responsiveSlides();
    }
});

//Custom Javascript code
var modal = document.getElementById('myModal');
if (modal !== null) {

    var img = document.getElementById('map');
    var modalImg = document.getElementById('myModal');
    img.onclick = function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
    };

    var span = document.getElementsByClassName('close')[0];


    span.onclick = function () {
        modal.style.display = 'none';
    };
}

//Custom jQuery code
$(document).ready(function () {
    $('#phone').click(function () {
        $('#phone').html('555-123-4567');
    });

    $('#email').click(function () {
        $('#email').html('sweets@wreckit.com');
    });
});
