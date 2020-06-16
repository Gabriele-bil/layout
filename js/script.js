/* ------------- MENU STICKY ------------- */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop+1;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/* ------------- FINE MENU STICKY ------------- */

$('document').ready(function(){
  /* ------------- DIMENSIONI FINESTRA ------------- */
  windowalt = $(window).height();
  windowlargh = $(window).width()
  /* ------------- FINE DIMENSIONI FINESTRA ------------- */

  /* ------------- HOVER LINK ------------- */
  $('a').hover(
    function(){
      $(this).css('color', '#9258f9')
    },
    function(){
      $(this).css('color', '#fff')
    }
  );
  /* ------------- FINE HOVER LINK ------------- */


  /* ------------- I NOSTRI CORSI ------------- */
  $('div.card').hover(
    function(){
      $(this).children('img').css({filter:' brightness(5)'})
    },
    function(){
      $(this).children('img').css({filter: 'brightness(1)'})
    }
  );
  /* ------------- FINE I NOSTRI CORSI ------------- */


  /* ------------- ISTRUTTORI ------------- */
  if(windowlargh>992){
    $('section.trainers div.row div.trainer-box').hover(
      function(){
        $(this).children('div.informazioni').fadeIn('400');
        $(this).children('div.trainer-name').fadeOut('400');
      },
      function(){
        $(this).children('div.informazioni').fadeOut('400');
        $(this).children('div.trainer-name').fadeIn('400');
      }
    );
  }
  /* ------------- FINE ISTRUTTORI ------------- */



  /* ------------- CALENDARIO ------------- */
  $('section.calendario div.giorni ul li').click(function(){
    $('section.calendario div.giorni ul').children('li').removeClass();
    $(this).addClass('attivo');
    var giorno=$(this).text();
    $('section.calendario div.row div.col-md-3').fadeOut(400);
    if(giorno=='Lunedì'){
      $('section.calendario div.row.lunedi div.col-md-3').delay(400).fadeIn(400);
    }else if(giorno=='Martedì'){
      $('section.calendario div.row.martedi div.col-md-3').delay(400).fadeIn(400);
    }else if(giorno=='Mercoledì'){
      $('section.calendario div.row.mercoledi div.col-md-3').delay(400).fadeIn(400);
    }else if(giorno=='Giovedì'){
      $('section.calendario div.row.giovedi div.col-md-3').delay(400).fadeIn(400);
    }else if(giorno=='Venerdì'){
      $('section.calendario div.row.venerdi div.col-md-3').delay(400).fadeIn(400);
    }else if(giorno=='Sabato'){
      $('section.calendario div.row.sabato div.col-md-3').delay(400).fadeIn(400);
    }
  });
  /* ------------- FINE CALENDARIO  ------------- */


  /* ------------- RESPONSIVE MENU  ------------- */
  $(".btn-responsive-menu").click(function() {
  	$("header nav").slideToggle();
  });
  /* ------------- FINE RESPONSIVE MENU  ------------- */


})
