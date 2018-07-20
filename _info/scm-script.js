<script type="text/javascript" xml="space">// <![CDATA[

require([
  'jquery',
  'slick',
  'Magento_Ui/js/modal/modal'
  ], function ($) {
    jQuery(document).ready(function () {
       jQuery(".widget-product-grid").slick({
        dots: false,
        arrows: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
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
     var videoModal = jQuery('#video').modal();
     jQuery('#openVideo').on('click', function(e) {
        e.preventDefault();
        videoModal.modal('openModal');
       jQuery("#simple-iframe").attr('src', "https://fast.wistia.net/embed/iframe/ozmj3dq5tp?videoFoam=true&autoplay=1");
      });
    });
  });

// ]]></script>
