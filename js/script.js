// Sitio ficticio Timbalandia por Diego Schmidt para coderhouse :D

// Esta versión del html y javascript son rudimentarios con el objetivo de completar el desafío DOM

// Declaramos funciones y variables iniciales
// Login rudimentarios, se complejizará al aprender otras cosas supongo ¿?

// Molestamos al usuario pidiéndole datos y esas cosas para el registro

function store(){

  let name = document.getElementById('name');
  let pw = document.getElementById('pw');
  let pp = document.getElementById('avatar');
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  let usuario = { 'nombre': 1, 'password': 2, 'avatar': 3 };


  if(name.value.length == 0){
    Swal.fire({
      title: 'Error!',
      text: 'Por favor coloque su email',
      icon: 'error',
      confirmButtonText: 'ok'
    })

  }else if(pw.value.length == 0){
    Swal.fire({
      title: 'Error!',
      text: 'Por favor coloque una clave',
      icon: 'error',
      confirmButtonText: 'ok'
    })

  }else if(name.value.length == 0 && pw.value.length == 0){
    Swal.fire({
      title: 'Error!',
      text: 'Por favor coloque un email y una clave',
      icon: 'error',
      confirmButtonText: 'ok'
    })

  // }else if(pw.value.length > 8){
  //     alert('Máximo 8 carácteres');

  // }else if(!pw.value.match(numbers)){
  //     alert('Por favor agregue un número');

  // }else if(!pw.value.match(upperCaseLetters)){
  //     alert('por favor agregue por lo menos 1 letra mayúscula');

  // }else if(!pw.value.match(lowerCaseLetters)){
  //     alert('Por favor agregue por lo menos 1 letra minúscula');

  }else{
      localStorage.setItem('name', name.value);
      localStorage.setItem('pw', pw.value);
 // Le damos 300 TimbaCoins de regalo al usuario y colocamos su estado en Logged yes     
      localStorage.setItem('TC', 300);
      localStorage.setItem('CN', 0);
      localStorage.setItem('logged', 'yes');
      // alert('Su cuenta fue creada con éxito :)');
      let audio = new Audio(`https://diego-schmidt.github.io/assets/registrado.mp3`);
      audio.loop = false;
      audio.play(); 
      window.setTimeout(function() {
        window.location.href = `https://diego-schmidt.github.io/index.html`;
    }, 2000);

  }
}





// Declaramos variables para usarlas en otras funciones

let estaLogeado = localStorage.getItem('logged');
let nombreLog = localStorage.getItem('name');
let timbCoins = localStorage.getItem('TC');
let cantidadNumerosLoteria = localStorage.getItem('CN'); // Fuaaa que nombre largo!
let avatar = localStorage.getItem('avatar');
// Variables para determinar la ruta relativa de las imágenes dinámicas

let url = window.location.pathname;
let pagina = url.split("/").pop();
let ruta = "..";
if(pagina != "index.html"){
ruta = "..";
} else {
ruta = ".";
}

// Obtenemos la lista de usuarios 

async function getUsers() {
  let url = 'users.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}



async function renderUsers() {
  let users = await getUsers();
  let html = '';
  users.forEach(user => {
      let htmlSegment = `<img src="${user.profileURL}" width="235px" ></div>
                          <h2 class="text-white">${user.firstName} ${user.lastName}</h2>
                          <div class="puntos text-white">${user.puntos} puntos</div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.containertop10');
  container.innerHTML = html;
}
if (pagina === "top10.html"){
renderUsers();
}



// Revisamos que los datos del login sean correctos y saludamos - Si el login es correcto se almacena el item Logged con el valor yes

function check(){
  let storedName = localStorage.getItem('name');
  let storedPw = localStorage.getItem('pw');

  let userName = document.getElementById('userName');
  let userPw = document.getElementById('userPw');
  // var userRemember = document.getElementById("rememberMe");

  if(userName.value == nombreLog && userPw.value == storedPw){
      // alert('Te identificaste exitosamente :).');
      localStorage.setItem('logged', 'yes');
      domLoggedIn();
      let audio = new Audio(`https://diego-schmidt.github.io/assets/login.mp3`);
      audio.loop = false;
      audio.play();
	  // --- Sound may not play due browser security policies ---
    var toasty = new QToasty(params = {'keyCodes':[]});
    
    setTimeout(()=>{
        toasty.trigger();
    }, 1500);
      window.setTimeout(function() {
        window.location.href = 'index.html';
    }, 5000);
  }else{
    Swal.fire({
      title: 'Error!',
      text: 'Email o clave incorrectos, pruebe de nuevo',
      icon: 'error',
      confirmButtonText: 'ok'
    })
  }
}

// Revisamos si el usuario ya está identificado para mostrar los mensajes a usuarios logeados

function isLogged(){
    if(estaLogeado != null){
    domIsLogged();
    document.getElementById("linkjuegosa").classList.remove("d-none");
    }
  }

// cambiamos algunos elementods dependiendo de la página

if (pagina == "index.html" && estaLogeado == "yes"){
  isLogged();
  domIsLoggedIndex();
} else if(pagina == "loteria.html" && estaLogeado == "yes"){
  isLogged();
  domIsLoggedLoteria();
  } else if(pagina == "juegos.html" && estaLogeado == "yes"){
    isLogged();
    // domIsLoggedJuegos();
    } else if(pagina == "cuenta.html" && estaLogeado == "yes"){
   isLogged();
    
    } else if(pagina == "top10.html" && estaLogeado == "yes"){
      isLogged();
       
       } 



// Creamos la función salir para cambiar el estado de logged a no

function salir(){
  localStorage.setItem('logged', 'no');
  if(pagina == "index.html"){
    localStorage.setItem('logged', 'no');
    domSalirIndex();
    let audio = new Audio(`https://diego-schmidt.github.io/assets/logoff.mp3`);
    audio.loop = false;
    audio.play(); 
    window.setTimeout(function() {
      window.location.href = `https://diego-schmidt.github.io/index.html`;
  }, 5000);
      } else if (pagina == "loteria.html"){
        localStorage.setItem('logged', 'no');
        domSalirLoteria();
        let audio = new Audio(`https://diego-schmidt.github.io/assets/logoff.mp3`);
      audio.loop = false;
      audio.play(); 
      window.setTimeout(function() {
        window.location.href = '../index.html';
    }, 5000);
        } 
        else if (pagina == "cuenta.html"){
          localStorage.setItem('logged', 'no');
          domSalirCuenta();
          let audio = new Audio(`https://diego-schmidt.github.io/assets/logoff.mp3`);
        audio.loop = false;
        audio.play(); 
        window.setTimeout(function() {
          window.location.href = '../index.html';
      }, 5000);
    }
      else if (pagina == "top10.html"){
        localStorage.setItem('logged', 'no');
        domSalirTop10();
        let audio = new Audio(`https://diego-schmidt.github.io/assets/logoff.mp3`);
      audio.loop = false;
      audio.play(); 
      window.setTimeout(function() {
        window.location.href = '../index.html';
    }, 5000);
          } 

          else if (pagina == "juegos.html"){
            localStorage.setItem('logged', 'no');
            domSalirJuegos();
            let audio = new Audio(`https://diego-schmidt.github.io/assets/logoff.mp3`);
          audio.loop = false;
          audio.play(); 
          window.setTimeout(function() {
            window.location.href = '../index.html';
        }, 5000);
              } 

        }
  // window.location.href="index.html";

  

function toastyNotify(a){
  notificacion = a;
  Toastify({
    text: `"${notificacion}"`,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}


// Función para comprar tc creada para agregar la cantidad de TC de las promos a la billetera del usuario al presionar el botón comprar

function comprar(b){
  let currentTc = +localStorage.getItem('TC');
  let compra = currentTc + b;
  localStorage.setItem('TC', `${compra}`);
  let audio = new Audio(`https://diego-schmidt.github.io/assets/comprartc.mp3`);
    audio.loop = false;
    audio.play(); 
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="./assets/billetera.png" width="20px" /> ${compra} TC <img src="./assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
  // alert(`Gracias por comprar ${b} TimbaCoins :D , ahora tienes ${compra} TimbaCoins`);
  toastyNotify(`Compraste ${b} TC`);
  console.log(compra);
}


// Función para comprar números de la lotería

function comprarNumero(a,b){
  let currentTc = +localStorage.getItem('TC');
  let agregarNumeros = parseInt(cantidadNumerosLoteria) + a;
  let compra = currentTc - b;
  // localStorage.setItem('TC', `${compra}`);
  switch(true) {
    case (b == 400):
      toastyNotify(`Compraste ${a} Lotis`);
      sonido = new Audio(`https://diego-schmidt.github.io/assets/compra4numeros.mp3`);
      sonido.loop = false;
      sonido.play(); 
      document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="./assets/billetera.png" width="20px" /> ${compra} TC <img src="./assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
      break;
    case (b == 800):
      toastyNotify(`Compraste ${a} Lotis`);
      sonido = new Audio(`https://diego-schmidt.github.io/assets/compra8numeros.mp3`);
      sonido.loop = false;
      sonido.play()
      document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="./assets/billetera.png" width="20px" /> ${compra} TC <img src="./assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
      break;
    default:
    toastyNotify(`Compraste ${a} Lotis`);
    sonido = new Audio(`https://diego-schmidt.github.io/assets/compra1numero.mp3`);
    sonido.loop = false;
    sonido.play(); 
    document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="./assets/billetera.png" width="20px" /> ${compra} TC <img src="./assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
  } 
  
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="https://diego-schmidt.github.io/assets/billetera.png" width="20px" /> ${compra} TC <img src="https://diego-schmidt.github.io/assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
  // alert(`Gracias por comprar ${b} TimbaCoins :D , ahora tienes ${compra} TimbaCoins`);
  // console.log(compra);
  // console.log(currentTc);
  if(currentTc < b){
    domNoAlcanza();
  } else {
    localStorage.setItem('TC', `${compra}`);
    localStorage.setItem('CN', `${agregarNumeros}`);
    domAlcanza();
  }
  console.log(currentTc,compra);
}


function nope(){
  let audio = new Audio(`https://diego-schmidt.github.io/assets/wrong.mp3`);
      audio.loop = false;
      audio.play(); 
      window.setTimeout(function() {
        window.location.href = 'loteria.html';
    }, 1500);
    
}

// Prevent Default botón login from
function prevDef(){
var submit_form=document.getElementById("login_btn");
		submit_form.onsubmit=function(e)
		{
			e.preventDefault();
		}
  }

// Togle Botón login

function abrirLogin() {
  let audio = new Audio(`https://diego-schmidt.github.io/assets/pop.mp3`);
    audio.loop = false;
    audio.play(); 
  document.getElementById("miLogin").style.display = "block";
  document.getElementById("miRegistro").style.display = "none";
  // document.getElementById("miRegistro").classList.toggle("d-none");
  document.getElementById("miLogin").classList.add('swirl-in-fwd');
}

function cerrarLogin() {
  // document.getElementById("miLogin").classList.remove('swirl-in-fwd');
  // document.getElementById("miLogin").classList.add('swirl-out-bck');
  // document.getElementById("miLogin").classList.toggle("d-none");
  let audio = new Audio(`https://diego-schmidt.github.io/assets/popout.mp3`);
  audio.loop = false;
  audio.play(); 
  document.getElementById("miLogin").style.display = "none";
}

// Togle Botón registrarse 

function abrirRegistro() {
  let audio = new Audio(`https://diego-schmidt.github.io/assets/pop.mp3`);
    audio.loop = false;
    audio.play(); 
  document.getElementById("miRegistro").style.display = "block";
  document.getElementById("miLogin").style.display = "none";
  // document.getElementById("miLogin").classList.toggle("d-none");
  document.getElementById("miRegistro").classList.add('swirl-in-fwd');
}

function cerrarRegistro() {
  let audio = new Audio(`https://diego-schmidt.github.io/assets/popout.mp3`);
  audio.loop = false;
  audio.play(); 
  document.getElementById("miRegistro").style.display = "none";
}

// Fin por el momento , en otras versiones del sistema se agregarán más interacciones con el usuario