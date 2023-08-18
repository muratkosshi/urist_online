$(document).ready(function () {
    //мобильное меню
    $('#mobile-menu-btn').click( function(event){
        event.preventDefault();
        $('#mobile-menu').fadeIn();
        $('#mm__wrapper')
            .css('visibility', 'visible')
            .css('transform', 'translateX(0)');
        $("body").css("overflow","hidden");
    });
    //закрытие мобильного меню
    $('.mm__close').click( function(){
        $('#mobile-menu').fadeOut();
        $('#mm__wrapper')
            .css('visibility', 'hidden')
            .css('transform', 'translateX(-100%)');
        $("body").css("overflow","auto");
    });
    $('.nav_menu a').click(function()
    {
        $('#mobile-menu').fadeOut();
        $('#mm__wrapper')
            .css('visibility', 'hidden')
            .css('transform', 'translateX(-100%)');
        $("body").css("overflow","auto");
    })
});
    $('.reviews_slider_block').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive:
        [
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow:1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
      });
    
// Функция, которая будет выполняться при изменении размера окна

    if (window.innerWidth <= 1000) {
        $('.specialties_blocks').slick({
            autoplay: true,
            slidesToShow: 1,
            arrows: false,
            dots: true
          })
    }
    else{
        console.log("nothing")
    }

// Добавляем обработчик события изменения размера окна
window.addEventListener("resize", handleWindowResize);



