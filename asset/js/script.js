$(document).ready(function () {
    const $hamburger = $('.hamburger');
    const $navLinks = $('.nav-links');

    $hamburger.on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $navLinks.toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.nav-links').length &&
            !$(e.target).closest('.hamburger').length) {
            $hamburger.removeClass('active');
            $navLinks.removeClass('active');
            $('body').removeClass('menu-open');
        }
    });

    $navLinks.on('click', function (e) {
        e.stopPropagation();
    });

    $('.nav-links a').on('click', function () {
        $hamburger.removeClass('active');
        $navLinks.removeClass('active');
        $('body').removeClass('menu-open');
    });
    
});

function displayFileName(input, displayId) {
    var fileName = input.files[0] ? input.files[0].name : 'No file chosen';
    $('#' + displayId).text(fileName);
}