$(function(){
  $('.slider__inner').slick({
    dots:true,
    prevArrow:false,
    nextArrow:false,
  });

  $('.menu__btn').on('click', function(){
    $('.header__inner-top').toggleClass('header__inner-top--active');
  })
});