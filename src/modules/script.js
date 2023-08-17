
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
                    slidesToShow:1
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
          })
    }
    else{
        console.log("nothing")
    }

// Добавляем обработчик события изменения размера окна
window.addEventListener("resize", handleWindowResize);
