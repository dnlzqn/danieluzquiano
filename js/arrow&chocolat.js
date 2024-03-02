// $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//         $('.pencil').addClass('invisible');
//     } else {
//         $('.pencil').removeClass('invisible');
//     }
// });

$(document).ready(function(){
  
  $('.arrow-up').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $('#intro').offset().top
      }, 1000);
  });

  $('.chocolat-parent').Chocolat();
});


function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}