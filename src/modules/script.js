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
            dots: true,
            adaptiveHeight: true
          })
    }
    else{
        console.log("nothing")
    }

// Добавляем обработчик события изменения размера окна
window.addEventListener("resize", handleWindowResize);


document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ссылки в навигации
    const navLinks = document.querySelectorAll('.nav_menu a');
  
    // Проходим по всем ссылкам и добавляем обработчик события на клик
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Отменяем действие по умолчанию (переход по ссылке)
        
        const targetSectionId = link.getAttribute('href'); // Получаем ID целевой секции
        const targetSection = document.querySelector(targetSectionId); // Получаем элемент целевой секции
  
        // Прокручиваем страницу до целевой секции
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth' // Добавляем плавную анимацию
        });
  
        // Применяем смещение к целевой секции
        targetSection.style.transform = 'translateX(90px)'; // Измените смещение по вашим требованиям
      });
    });
  });
