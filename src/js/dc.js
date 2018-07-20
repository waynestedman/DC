$(document).ready(function(){
  $("#productsSlider").slick({
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    dots: true,
    fade: true,
    infinite: true,
    pauseOnDotsHover: true,
    speed: 1200,
    customPaging: function(slider, i) {
        var thumbnail = $(slider.$slides[i]).data("thumbnail");
        return '<a href="javascript:void(0)"><img src="'+thumbnail+'" class="img-wrapper"></a>'}
  });
  $('#setsCarousel').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  });
});
