$(function(){

  $('.menu__btn').click(function (){
    $('.menu__list, .menu__btn').toggleClass('active')
  });
    
 
 
  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 1,
      showinfo: 0
    },
  });

  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-info',
    prevArrow: '<button class="slick-arrows slick-prev"><img src="images/prev.png" alt="prev"></button>',
    nextArrow: '<button class="slick-arrows slick-next"><img src="images/next.png" alt="next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    ]
  });

  $('.heroes__slider-info').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    arrows: false,
    fade: true,
  });

  
});