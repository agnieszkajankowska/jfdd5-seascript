/**
 * Created by Agnieszka on 2016-11-28.
 */

var slideIndex = 0;
carousel();
function plusSlides(n) {
    showSlides(slideIndex = slideIndex + n);
}

var x = document.getElementsByClassName("mySlides");

function carousel() {
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

$('.next').click(function() {
  clearInterval(carousel);
  slideIndex += 1;
  if (slideIndex > x.length - 1) {
    slideIndex = 0;
  }


}


// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
//