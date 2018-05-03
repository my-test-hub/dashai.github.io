(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.fade').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space