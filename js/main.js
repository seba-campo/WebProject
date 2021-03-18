'use strict'

$(document).ready(function(){

  // SLIDER DE HEADER
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: 852,
    randomStart: true,
    responsive: true,
    infiniteLoop: true,
    auto: true,
  });

  // POSTS
  var posts = [
    {title: "Prueba de título 1",
    date: new Date(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris urna, scelerisque eu justo quis, tincidunt suscipit nisi. Integer ac vulputate libero. Cras commodo tincidunt augue, sit amet fringilla ante lacinia ut. Suspendisse viverra mi at mauris vestibulum, quis hendrerit ante feugiat. Maecenas tincidunt nunc dui, in ultricies neque tempus sed. Donec sed faucibus mi. In hac habitasse platea dictumst. Pellentesque lectus libero, convallis ut pretium quis, molestie eu neque. Duis vehicula consequat quam at gravida.",},
    {title: "Prueba de título 2",
    date: new Date(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris urna, scelerisque eu justo quis, tincidunt suscipit nisi. Integer ac vulputate libero. Cras commodo tincidunt augue, sit amet fringilla ante lacinia ut. Suspendisse viverra mi at mauris vestibulum, quis hendrerit ante feugiat. Maecenas tincidunt nunc dui, in ultricies neque tempus sed. Donec sed faucibus mi. In hac habitasse platea dictumst. Pellentesque lectus libero, convallis ut pretium quis, molestie eu neque. Duis vehicula consequat quam at gravida.",},
    {title: "Prueba de título 3",
    date: new Date(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris urna, scelerisque eu justo quis, tincidunt suscipit nisi. Integer ac vulputate libero. Cras commodo tincidunt augue, sit amet fringilla ante lacinia ut. Suspendisse viverra mi at mauris vestibulum, quis hendrerit ante feugiat. Maecenas tincidunt nunc dui, in ultricies neque tempus sed. Donec sed faucibus mi. In hac habitasse platea dictumst. Pellentesque lectus libero, convallis ut pretium quis, molestie eu neque. Duis vehicula consequat quam at gravida.",},
    {title: "El dolor en el Ipsum",
    date: new Date(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris urna, scelerisque eu justo quis, tincidunt suscipit nisi. Integer ac vulputate libero. Cras commodo tincidunt augue, sit amet fringilla ante lacinia ut. Suspendisse viverra mi at mauris vestibulum, quis hendrerit ante feugiat. Maecenas tincidunt nunc dui, in ultricies neque tempus sed. Donec sed faucibus mi. In hac habitasse platea dictumst. Pellentesque lectus libero, convallis ut pretium quis, molestie eu neque. Duis vehicula consequat quam at gravida.",}
  ];

// Bucle para que se genere una plantilla en HTML con cada iteracion de los POSTS
  posts.forEach((item, index) => {
    var post = `
      <article class="post">
        <h2>${item.title}</h2>
        <span class="fecha">${item.date}</span>
        <p>
          ${item.content}
        </p>
        <a href="#" class="button-more">Leer más</a>
      </article>
    `;

    // Incrustamos cada post iterado en el HTML con jQuery
    $("#posts").append(post);
  });

// SELECTORES DE TEMAS
// Guardar el tema elegido en el LocalStorage

  var theme = $("#theme");
  var color = localStorage.getItem("theme");


// Tema guardado en el local Storage

  function setTheme(){
    theme.attr("href", color);
        // Funcion de los botones para cambiar los colores
        $("#toGreen").click(function(){
           theme.attr("href", "css/green.css");
           localStorage.setItem("theme", "css/green.css");
           console.log("Color elegido Verde");
         });

        $("#toRed").click(function(){
           theme.attr("href", "css/red.css");
           localStorage.setItem("theme", "css/red.css");
           console.log("Color elegido Rojo");
         });

        $("#toBlue").click(function(){
           theme.attr("href", "css/blue.css");
           localStorage.setItem("theme", "css/blue.css");
           console.log("Color elegido Azul");
         });
  };
  setTheme();


  // Funcionalidad de SCROLL UP
    $(".subir").click(function(e){
      e.preventDefault();

      $('html, body').animate({
            scrollTop: 0
          }, 500);

      return false;
    });

    // Login falso
   $("#login-form").submit(function(){
     var user_name = $("#user_name").val();
     var user_email = $("#user_email").val();
     var user_pwd = $("#user_pwd").val();

     localStorage.setItem("Nombre de usuario", user_name);
     localStorage.setItem("Email del usuario", user_email);
   });

   // Mostrar info del usuario logueado
    var user_name = localStorage.getItem("Nombre de usuario");
    var user_email = localStorage.getItem("Email del usuario");
    var about_p = $("#about p");

    if(user_name != null && user_name != "undefined"){
      about_p.html("Bienvenido " + user_name + "<br>");
      $(".container").hide();
      about_p.append("<a href='#' id='logout'>Cerrar sesion </a>");

      $("#logout").click(function(){
        localStorage.removeItem("Nombre de usuario");
        localStorage.removeItem("Email del usuario");
        location.reload();
        $(".container").show();
      });
    };
});
