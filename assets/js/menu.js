var sections = $('section');
var nav = $('nav');
var nav_height = nav.outerHeight();
var button = nav.find('button')

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  if($(document).scrollTop() > 0){;
    nav.addClass('section-look');
    nav.find('a').parent().removeClass('active');
    nav.find('a').parent().removeClass('grow');
    nav.find('a').parent().addClass('shrink');
  }
  else{
    nav.removeClass('section-look');
    nav.find('a').parent().removeClass('shrink');
    nav.find('a').parent().addClass('grow');
  }

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').parent().removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});

$(document).on('click', 'a[href^="#"]', function (e) {
  var id = $(this).attr('href');
  e.preventDefault();
  var pos = $(id).offset().top;
  $('body, html').stop().animate({scrollTop: pos}, 1500, 'easeOutQuad');
});

$(button).on('click', function(){
  var li = nav.find('li.menu-link');
  var ul = nav.find('ul');
  li.stop().slideToggle();
  ul.stop().slideToggle();
  // li.parent().stop().slideToggle();
});




