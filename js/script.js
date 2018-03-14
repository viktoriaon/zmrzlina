(function($){
    var container = $('.container'),
    startOpacity = container.find('img').css('opacity');

    container.find('img').on('mouseenter mouseleave', function(event){
        var opacity = event.type === 'mouseenter' ? 1 : startOpacity;
        $(this).fadeTo(200, opacity);
        console.log(event.type);
    })
})(jQuery);