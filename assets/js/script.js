

$('document').ready(function(){
    $('#overlayWhite').addClass('animate__fadeOut');
    
    setTimeout(function(){ 
      $('#overlayWhite').remove();
    }, 2000);

    $('#sayHi').on('mouseover', function(){
      $('#sayHi').addClass('show active');
      $('#sayHiDropdown').addClass('show');
    });

    $('#sayHiDropdown').on('mouseleave', function(){
      $('#sayHi').removeClass('show active');
      $('#sayHiDropdown').removeClass('show');
    })

    $('.featured-articles').remove();

    $('.back-to-top').on('click', function(){
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
});

window.onscroll = function() { navbarScroll(); backToTopScroll(); };

var header = document.querySelector(".main-header");

var sticky = header.offsetTop;

function backToTopScroll() {
  if (window.pageYOffset > sticky) {
    $('.back-to-top').removeClass('d-none')
  } else {
    $('.back-to-top').addClass('d-none')
  }
}

function navbarScroll() {
  if ( window.innerWidth <= 768 ) { return; }
  if (window.pageYOffset > sticky) {
    $('.main-header')
    .css({
      'background-color': '#1E1C1C', 
      'transition': 'background-color 500ms'
    })
    .addClass('scrolled')
  } else {
    $('.main-header').css({
      'background-color': 'transparent', 
      'transition': 'background-color 500ms'
    })
    .removeClass('scrolled')
  }
}