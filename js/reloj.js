$(document).ready(function(){
  // RELOJ

  setInterval(function(){
    var reloj = moment().format("h:mm:ss a");
    $("#reloj").html(reloj);

    console.log(reloj);
  },1000);



});
