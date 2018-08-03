<script type="text/javascript" xml="space">// <![CDATA[

require([
  'jquery',
  'slick'
  ], function ($) {
    jQuery(document).ready(function () {
      jQuery(".productCarousel").slick({
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
      jQuery('.testimonialCarousel').slick({
        dots: false,
        speed: 600,
        fade: true,
        cssEase: 'linear'
      });
    });
  });
]]></script>
