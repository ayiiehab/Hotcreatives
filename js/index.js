

$(window).scroll(function(){
  let scrolWindow = $(window).scrollTop();

    if(scrolWindow > scrollTop -50 ){

      $('#main-nav').css('backgroundColor','rgba(0,0,0,0.5)');

    }
    else{

      $('#main-nav').css('backgroundColor','rgba(0,0,0,0.3)');

    }
});



$('a').click(function(e){

  let hrefA = $(e.target).attr('href');

  let TopA = $(hrefA).offset().top;

  $('html,body').animate( {scrollTop:TopA-100 } ,1000);


});
window.jssor_1_slider_init = function() {

  var jssor_1_options = {
    $AutoPlay: 1,
    $SlideWidth: 720,
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 16,
      $SpacingY: 16
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 980;

  function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

          var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

          jssor_1_slider.$ScaleWidth(expectedWidth);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    center: true,
    loop: true,
    dots: false,
    margin: 10,
    autoWidth: true,
    stagePadding: 0,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      485: {
        items: 3,
      },
      728: {
        items: 4,
        loop: true,
      },
      960: {
        items: 5,
        loop: true,
      },
      1200: {
        items: 6,
      },
      
    },
  });
});