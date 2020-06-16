$('document').ready(function(){
  //Header fixed
  $(window).scroll(function(){
    var dim_finestra=$(document).width();
    var header=$('header');
    var scroll= $(window).scrollTop();
    if(dim_finestra>=480){
      if(scroll>=62){
        header.addClass('fixed');
      }else{
        header.removeClass('fixed');
      }
    }
  });

  //Pallino Navbar
  var link=$('header nav ul li a');
  link.hover(
    function(){
      $(this).after('<div class="pallino"></div>');
    },
    function(){
      $('.pallino').remove();
    }
  );


  //Toggle Menu
  $('div.toggle-menu img').click(function(){
    $('header nav').toggle();
  });

})
