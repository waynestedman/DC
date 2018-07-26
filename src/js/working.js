<script type="text/javascript" xml="space">// <![CDATA[
require([
  'jquery',
  'slick'
  ], function ($) {
jQuery(document).ready(function(){
  jQuery("#productsSlider").slick({
    arrows: false,
    autoplay: true,
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
 jQuery(".widget-product-grid").slick({
    dots: false,
    arrows: false,
    speed: 1000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 830,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 501,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
 });
});
// ]]></script>
