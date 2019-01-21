// para cambiar el color del menu
window.onscroll = function(){
    myfunction()
};
function myfunction(){
    var menu = document.getElementById('menu');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        menu.className = 'navbar navbar-expand-lg navbar-dark bg-primary fixed-top';
    } else{
        menu.className = 'navbar navbar-expand-lg navbar-dark bg-transp fixed-top'; 
    }
};

const form = document.getElementById('contacForm'); // Obtenemos la referencia al formulario

    if(form){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
      form.addEventListener('submit', contacForm); // Al momento de enviar el formulario, ejecuta la función "contactform"
    }

    function contacForm(event) {
      event.preventDefault(); 
      const name = document.getElementById('name'); // Obtenemos la referencia a cada uno de nuestros elementos del formulario
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const mensaje = document.getElementById('mensaje');
      const data = {
        'name': name.value,
        'email': email.value,
        'phone': phone.value,
        'mensaje': mensaje.value,
      }; // Creamos un objecto con todos los elementos de nuestro formulario.
      savecontacForm(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
      form.reset(); // borramos todos los campos. 
    }

  function savecontacForm(data) {
    firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
      .then(function(){
        alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
      })
      .catch(function(){
        alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
      });
  };