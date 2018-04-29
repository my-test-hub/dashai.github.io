(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.fade').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space