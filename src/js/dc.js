$(document).ready(function(){
  $('.ingredientsCarousel').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var videoModal = $('#video').modal();
  $('#openVideo').on('click', function(e) {
    e.preventDefault();
    videoModal.modal('openModal');
   $("#simple-iframe").attr('src', "https://fast.wistia.net/embed/iframe/ozmj3dq5tp?videoFoam=true&autoplay=1");
  });
}); // doc ready
