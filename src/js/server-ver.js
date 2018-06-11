<script type="text/javascript" xml="space">// <![CDATA[

require([
  'jquery',
  'slick',
  'Magento_Ui/js/modal/modal'
  ], function ($) {
    $(document).ready(function () {
      var videoModal = $('#video').modal();
      $(".productCarousel").slick({
        dots: false,
        speed: 600,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
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
      $('#openVideo').on('click', function(e) {
        e.preventDefault();
        videoModal.modal('openModal');
       $("#simple-iframe").attr('src', "https://fast.wistia.net/embed/iframe/ozmj3dq5tp?videoFoam=true&autoplay=1");
      });
    });
  });
]]></script>
