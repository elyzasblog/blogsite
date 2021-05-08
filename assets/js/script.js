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
});