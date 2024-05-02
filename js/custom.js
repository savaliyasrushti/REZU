// header sticky start
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 150) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

    
  });
//header stiky end


// slidr start

$(document).ready(function () {
  new WOW().init();
  $("#banner").owlCarousel({
      loop: true,
      nav: true,
      items: 1,
      dots: true,
  });
  wow.init();
});

$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
      loop: true,
      nav: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
  })

});



// slider end
//loader start

$(document).ready(function() {
    setTimeout(function(){
        $('.loader').fadeOut();
    },2000);
    var btn = $('#button');
    
$(window).scroll(function() {
    if($(window).scrollTop() > 300){
        btn.addClass('show');
    }else{
        btn.removeClass('show');
    }

});
btn.on('click',function(e){
    e.preventDefault();
    $('html,body').animate({screenTop:0},'500');
});
})
// loader end