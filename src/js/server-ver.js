<script type="text/javascript" xml="space">// <![CDATA[
require([
  'jquery',
  'slick',
  'Magento_Ui/js/modal/modal'
  ], function ($) {
$(document).ready(function(){
  var videoModal = $('#video').modal();
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
          slidesToScroll: 3
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
  $('#openVideo').on('click', function(e) {
        e.preventDefault();
        videoModal.modal('openModal');
      $("#simple-iframe").attr('src', "https://fast.wistia.net/embed/iframe/s0w5d5rgpa?videoFoam=true&autoplay=1");
      });
    });
  });
// ]]></script>
