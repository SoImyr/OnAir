$(document).ready(function(){
  const search = document.querySelector('.header__top-search')
  const body = document.querySelector('.header')
  search.addEventListener('click', function(e){
    e.stopPropagation();
    this.classList.add('header__top-search--active');
  });
  body.addEventListener('click', function(e){
    search.classList.remove('header__top-search--active');
  });
  $('.header__sliders').slick({
    arrows: false,
    slidesToShow: 1,
    Infinity: true,
    draggable: false,
    dots: true,
  })
  $('.header__prev').on('click', function (e) {
    e.preventDefault()
    $('.header__sliders').slick('slickPrev')
  })
  $('.header__next').on('click', function (e) {
    e.preventDefault()
    $('.header__sliders').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows:false,
    dots: true,
    appendDots: $('.testimonials__dots'),
  })
  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })


  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    } else {
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideDown()
    }
  })

  $(".header__nav-list a, .header__top_btn, .footer__go-top, .header__content-buttons a, .about__btn-box a, .footer__top-list a").on("click", function (e) {
    e.preventDefault()
    var id  = $(this).attr('href'),
    top = $(id).offset().top -50
    $('body,html').animate({scrollTop: top}, 1000)
    })
    
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
  $('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle()
  })
})