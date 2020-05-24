
$(function(){
    $(".galary__box").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows:true,
      responsive: [
        {
          breakpoint: 920,
          settings: {
            arrows:false
          }
        }
      ]
    });

    $(".review__slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    jQuery("a.scrollto").click(function () {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top-20;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
      return false;
    });
    
    $('.menu__btn').on('click',function(){
      $('.menu').slideToggle();
    });
});


