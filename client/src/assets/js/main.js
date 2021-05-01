
/******************************************On Load Page Start**********************************************************/
$(function () {
  var toggle = document.getElementById("toggle");
  alert(toggle)
});

/******************************************Header Start**********************************************************/

window.addEventListener("scroll",function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY >0);
  console.log("hi header =="+header.childNodes.length);
})

/******************************************Header End**********************************************************/

/******************************************Navbar End**********************************************************/
var toggle = document.getElementById("toggle");
toggle.onclick = function () {
  toggle.classList.toggle('active');
  alert("hi");
}

/******************************************Navbar End**********************************************************/





/******************************************On Load Page End**********************************************************/



/******************************************Register Form Start*********************************************************/


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



/******************************************Register Form End//*********************************************************/




/******************************************Start Validation Form*******************************************************/


/******************************************Start Validation Form*******************************************************/







/********************************************End Validation Form*******************************************************/

