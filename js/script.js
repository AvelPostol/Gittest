@@include('jq.js')
@@include('aos.js')
@@include('slick.min.js')
@@include('swiper-bundle.min.js')
@@include('dynamicAdapt.js')


$(document).ready(function(){



$('.black-visibility').fadeOut(1000);


const swiper2 = new Swiper('.item-slider', {
   slidesPerView: 4,
   loop:true,
   direction: 'horizontal',
   spaceBetween: 0,
   navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type:'fraction',
    },
  
});





/*
  $('.products').click(function(event) {
    if(!($('.menu-pop').hasClass('pointer'))){
       $('.menu-pop').toggleClass('pointer');
       $('.products').toggleClass('red-fone');
    }
    else{
      $('.menu-pop').removeClass('pointer');
      $('.products').removeClass('red-fone');
    }
 });

*/
 

$(window).resize(function(event){
   adaptive_function();
});
function adaptive_header(w) {
   var headerMenu=$('.header-menu');
   if(w.matches){
      if(!$('.header-top-menu-item').hasClass('done')){
         $('.header-top-menu-item').addClass('done').appendTo(headerMenu);
      }
   }
   else{
      $.each($('.header-top-menu-item'), function(index, val) {
            if($(this).hasClass('done')){
               $(this).removeClass('done').prependTo($('.header-top__menu'));
            }
         
      });
   }
}
function adaptive_function() {
   var w=window.matchMedia('(max-width: 992px)');
   adaptive_header(w);
}
   adaptive_function();
   $('.header-menu__icon, .set-city').click(function(event) {
      $(this).toggleClass('active');
      $('.header-menu').toggleClass('active');
      if($('.menu-short').hasClass('clickanimtable')){
         $('.menu-short').removeClass('clickanimtable')
      }

      
   });
   $('.header-bottom-menu__link').click(function(event){
      $('.header-menu').removeClass('active');
   });




   $('.header-menu-choice__icon').click(function(event) {
      //$(this).toggleClass('active');
      $('.header-menu-choice').toggleClass('active');
     /* if($('.menu-short').hasClass('clickanimtable')){
         $('.menu-short').removeClass('clickanimtable')
      }*/
      if(!$(this).hasClass('active')){
         $(this).toggleClass('active');
      }
      else{
         $(this).removeClass('active');
      }
     /* if($(this).hasClass('active')){
         $('body').data('scroll',$(window).scrollTop());
      }
         $('body').toggleClass('lock');
      if(!$(this).hasClass('active')){
        $('body,html').scrollTop(parseInt($('bode').data('scroll')));
      }*/
   });
   /*$('.header-bottom-menu__link').click(function(event){
      $('.header-menu').removeClass('active');
   });*/




});


$('.header-menu-choice__icon').click(function (event) {
   event.preventDefault()
   /*dome code here*/
   });



function ibg(){
   $.each($('.ibg'), function(index, val){
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}
ibg();



$(window).resize(function(event){
   adaptive_functionforitem();
});
function adaptive_item(w) {
   var headerMenu=$('.description760');
   if(w.matches){
      if(!$('.rateandcard').hasClass('done')){
         $('.rateandcard').addClass('done').appendTo(headerMenu);
      }
   }
   else{
      $.each($('.rateandcard'), function(index, val) {
            if($(this).hasClass('done')){
               $(this).removeClass('done').prependTo($('.rateandcard-convert'));
            }
         
      });
   }
   if(w.matches){
      if(!$('.content-collumn-item__text').hasClass('done')){
         $('.content-collumn-item__text').addClass('done').appendTo(headerMenu);
      }
   }
   else{
      $.each($('.content-collumn-item__text'), function(index, val) {
            if($(this).hasClass('done')){
               $(this).removeClass('done').prependTo($('.description'));
            }
         
      });
   }
   
}
function adaptive_functionforitem() {
   var w=window.matchMedia('(max-width: 768px)');
   adaptive_item(w);
}
$('.popup__close').click(function(event) {
   if(!($('.popup').hasClass('hidden'))){
      $('.popup').toggleClass('hidden');
   }
});
$('.contact_us').click(function(event) {
   if(($('.popup').hasClass('hidden'))){
      $('.popup').removeClass('hidden');
   }
});
$('.sort').click(function(event) {
   if(($('.sort-button-position').hasClass('hidden'))){
      $('.sort-button-position').removeClass('hidden');
      $('.sort-cont').toggleClass('sort-cont__active');
   }
   else{
      $('.sort-button-position').toggleClass('hidden');
      $('.sort-cont').removeClass('sort-cont__active');
   }
});







$('.header-main-menu__icon_bar').click(function(event) {
   if(!($('.header-main-menu').hasClass('active'))){
      $('.header-main-menu').toggleClass('active');
   }
   else{
      $('.header-main-menu').removeClass('active');
   }
});

$('.header-main-menu__icon').click(function(event) {
   if(!($('.header-main-menu').hasClass('active'))){
      $('.header-main-menu').toggleClass('active');
   }
   else{
      $('.header-main-menu').removeClass('active');
   }
});

