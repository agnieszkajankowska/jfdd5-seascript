/**
 * Created by tgola on 30.11.16.
 */

$(window).on('scroll', parabole_tanczo);

function parabole_tanczo() {

  $('.fala-1').stop().css({
    top: ($(document).scrollTop()) * 0.5
  });

  $('.fala-2').stop().css({
    top: ($(document).scrollTop()) * 0.3
  });

  $('.fala-3').stop().css({
    top: ($(document).scrollTop()) * 0.15
  });

}