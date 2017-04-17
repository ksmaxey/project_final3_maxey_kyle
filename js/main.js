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
    $('.rslides').responsiveSlides();
});

//Custom Javascript code

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('map');
var modalImg = document.getElementById('img01');
img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
};

//Custom jQuery code

$('#phone').click(function () {
    $('#phone').html('555-123-4567');
});

$('#email').click(function () {
    $('#email').html('sweets@wreckit.com');
});
