var cont = 0;

function register(){

  cont++;

  if(cont==1){
    $('.box').animate({height:'695px'}, 550);
    $('.show').css('display','block');
    $('#logintoregister').text('Registrati');
    $('#buttonlogintoregister').text('Registrati');
    $('#plogintoregister').text("Sei gia' registrato?");
    $('#textchange').text('Accedi');
  }
  else
  {
    $('.show').css('display','none');
    $('.box').animate({height:'365px'}, 550);
    $('#logintoregister').text('Login');
    $('#buttonlogintoregister').text('Login');
    $('#plogintoregister').text("Non sei iscritto?");
    $('#textchange').text('Registrati');
    cont = 0;
  }
}
