$(window).on('scroll', function() {
    $('.col').each(function() {
        var elementTop = $(this).offset().top;
        var viewportBottom = $(window).scrollTop() + $(window).height();

        if (elementTop < viewportBottom) {
            $(this).find('img, h4, p').addClass('visible');
        }
    });
});

