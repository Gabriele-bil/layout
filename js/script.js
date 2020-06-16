$('document').ready(function(){
  //Var contatore
  var cont=$('#cont').text();


  //Var articolo 1
  var h1_1='Titolo 1 Lorem Ipsum';
  var h2_1='Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.';

  //Var articolo 2
  var h1_2='Titolo 2 Lorem Ipsum';
  var h2_2='Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo';

  //Var articolo 3
  var h1_3='Titolo 3 Lorem Ipsum';
  var h2_3='quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.';

  //Var articolo 4
  var h1_4='Titolo 4 Lorem Ipsum';
  var h2_4='È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato.';

  //Var articolo 5
  var h1_5='Titolo 5 Lorem Ipsum';
  var h2_5='Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”';


  //Funzione scroll
  $(window).on('wheel', function(event){
    if(event.originalEvent.deltaY < 0 && cont==1){
      // wheeled up
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h1_5)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h2_5)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).removeAttr('id', 'none').attr('id', 'bg5')});
      cont=5;
      $('#cont').text(cont);
      preventDefault();
    }else if(cont==1){
      // wheeled down
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h1_2)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h2_2)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).removeAttr('id', 'none').attr('id', 'bg2')});
      cont=2;
      $('#cont').text(cont);
      preventDefault();
    }
  });


  $(window).on('wheel', function(event){
    if(event.originalEvent.deltaY < 0 && cont==2){
      // wheeled up
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h1_1)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h2_1)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).removeAttr('id', 'none').attr('id', 'bg1')});
      cont=1;
      $('#cont').text(cont);
      preventDefault();
    }else if(cont==2){
      // wheeled down
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h1_3)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h2_3)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).removeAttr('id', 'none').attr('id', 'bg3')});
      cont=3;
      $('#cont').text(cont);
      preventDefault();
    }
  });


  $(window).on('wheel', function(event){
    if(event.originalEvent.deltaY < 0 && cont==3){
      // wheeled up
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h1_2)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h2_2)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).removeAttr('id', 'none').attr('id', 'bg2')});
      cont=2;
      $('#cont').text(cont);
      preventDefault();
    }else if(cont==3){
      // wheeled down
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h1_4)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h2_4)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).removeAttr('id', 'none').attr('id', 'bg4')});
      cont=4;
      $('#cont').text(cont);
      event.preventDefault();
    }
  });


  $(window).on('wheel', function(event){
    if(event.originalEvent.deltaY < 0 && cont==4){
      // wheeled up
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h1_3)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h2_3)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).removeAttr('id', 'none').attr('id', 'bg3')});
      cont=3;
      $('#cont').text(cont);
      preventDefault();
    }else if(cont==4){
      // wheeled down
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h1_5)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h2_5)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).removeAttr('id', 'none').attr('id', 'bg5')});
      cont=5;
      $('#cont').text(cont);
      preventDefault();
    }
  });


  $(window).on('wheel', function(event){
    if(event.originalEvent.deltaY < 0 && cont==5){
      // wheeled up
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h1_4)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).text(h2_4)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown('slow', function(){$(this).removeAttr('id', 'none').attr('id', 'bg4')});
      cont=4;
      $('#cont').text(cont);
      preventDefault();
    }else if(cont==5){
      // wheeled down
      $('main.centro div.col-md-2 h1').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h1_1)});
      $('main.centro div.col-md-2 h2').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).text(h2_1)});
      $('main.centro div.col-md-6').slideUp("fast").stop(false, true).slideDown("slow", function(){$(this).removeAttr('id', 'none').attr('id', 'bg1')});
      cont=1;
      $('#cont').text(cont);
      preventDefault();
    }
  });






})
