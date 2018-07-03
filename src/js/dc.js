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
    // slidesToShow: 1,
    // slidesToScroll: 1,
    customPaging: function(slider, i) {
        var thumbnail = $(slider.$slides[i]).data("thumbnail");
        return '<a href="javascript:void(0)"><img src="'+thumbnail+'"></a>'}
  });
  // $('.setsCarousel').slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   responsive: [
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });
});
