const splash = document.querySelector('.splashscreen')
console.log(splash)
    setTimeout(() =>{
splash.classList.add('display-none');
    },6000);



function checkElementLocation() {
  var $window = $(window);
  var bottom_of_window = $window.scrollTop() + $window.height();
  $('.animate').each(function(i) {
    var $that = $(this);
    var bottom_of_object = $that.position().top;

    //if element is in viewport, add the animate class
    if (bottom_of_window > bottom_of_object) {
      $(this).animate({opacity: "1"}, 1000);
      
    }
  });
}
// if in viewport, show the animation
checkElementLocation();

$(window).on('scroll', function() {
  checkElementLocation();
});