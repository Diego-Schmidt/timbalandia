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

  if(name.value.length == 0){
      alert('Por favor ponga su email');

  }else if(pw.value.length == 0){
      alert('Por favor ponga un password');

  }else if(name.value.length == 0 && pw.value.length == 0){
      alert('Por favor ponga un email y una contraseña');

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
      let audio = new Audio(`${ruta}/assets/registrado.mp3`);
      audio.loop = false;
      audio.play(); 
      window.setTimeout(function() {
        window.location.href = `${ruta}/index.html`;
    }, 1500);

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

console.log(ruta);


// Revisamos que los datos del login sean correctos y saludamos - Si el login es correcto se almacena el item Logged con el valor yes

function check(){
  let storedName = localStorage.getItem('name');
  let storedPw = localStorage.getItem('pw');

  let userName = document.getElementById('userName');
  let userPw = document.getElementById('userPw');
  // var userRemember = document.getElementById("rememberMe");

  if(userName.value == storedName && userPw.value == storedPw){
      // alert('Te identificaste exitosamente :).');
      localStorage.setItem('logged', 'yes');
      document.getElementById("linkPanel").style.display = "block";
      document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${storedName}! <img src="./assets/billetera.png" width="20px" /> ${timbCoins} TC <img src="./assets/tc.gif" width="20px"/> Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
  }else{
      alert('Usuario o contraseña incorrectos, pruebe de nuevo');
  }
}

// Revisamos si el usuario ya está identificado para mostrar los mensajes a usuarios logeados

function isLogged(){
    if(estaLogeado != null){
    document.getElementById("linkPanel").style.display = "block";
    document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button>`;
    document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>`;
    document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="${ruta}/assets/billetera.png" width="20px" /> ${timbCoins} TC <img src="${ruta}/assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
    }
  }

// cambiamos algunos elementods dependiendo de la página

if (pagina == "index.html" && estaLogeado == "yes"){
  isLogged();
  document.getElementById("comprar100").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="comprar(100)">Comprar</button>`;
  document.getElementById("comprar500").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(500)">Comprar</button>`;
  document.getElementById("comprar1000").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(1000)">Comprar</button>`;
} else if(pagina == "loteria.html" && estaLogeado == "yes"){
  isLogged();
  document.getElementById("comprar1").innerHTML = `<button id="C1" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="comprarNumero(1,100)">Comprar</button>`;
  document.getElementById("comprar4").innerHTML = `<button id="C4" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprarNumero(4,400)">Comprar</button>`;
  document.getElementById("comprar8").innerHTML = `<button id="C8" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprarNumero(8,800)">Comprar</button>`;
  } else if(pagina == "cuenta.html" && estaLogeado == "yes"){
   isLogged();
    
    } 



// Creamos la función salir para cambiar el estado de logged a no

function salir(){
  localStorage.setItem('logged', 'no');
  if(pagina == "index.html"){
    localStorage.setItem('logged', 'no');
    document.getElementById("linkPanel").style.display = "none";
    document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2" onclick="abrirRegistro()" >Registrarse</button>`;
    document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="abrirLogin()" >Ingresar</button>`;
    document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! hasta la próxima :D</h6>`;
    document.getElementById("comprar100").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="">Identifíquese para comprar</button>`;
    document.getElementById("comprar500").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="">Identifíquese para comprar</button>`;
    document.getElementById("comprar1000").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="">Identifíquese para comprar</button>`;
    let audio = new Audio(`${ruta}/assets/logoff.mp3`);
    audio.loop = false;
    audio.play(); 
    window.setTimeout(function() {
      window.location.href = `${ruta}/index.html`;
  }, 5000);
      } else if (pagina == "loteria.html"){
        localStorage.setItem('logged', 'no');
        document.getElementById("linkPanel").style.display = "none";
        document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button>`;
        document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>`;
        document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! hasta la próxima :D</h6>`;
        document.getElementById("comprar1").innerHTML = `<button id="C1" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning">Identifiquese para comprar</button>`;
        document.getElementById("comprar4").innerHTML = `<button id="C4" type="button" class="w-100 btn btn-lg btn-primary" >Identifiquese para comprar</button>`;
        document.getElementById("comprar8").innerHTML = `<button id="C8" type="button" class="w-100 btn btn-lg btn-primary" >Identifiquese para comprar</button>`;
        let audio = new Audio(`${ruta}/assets/logoff.mp3`);
      audio.loop = false;
      audio.play(); 
      window.setTimeout(function() {
        window.location.href = `${ruta}/index.html`;
    }, 5000);
        } 
        else if (pagina == "cuenta.html"){
          localStorage.setItem('logged', 'no');
          document.getElementById("linkPanel").style.display = "none";
          document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button>`;
          document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>`;
          document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! hasta la próxima :D</h6>`;
          document.getElementById("comprar1").innerHTML = `<button id="C1" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning">Identifiquese para comprar</button>`;
          document.getElementById("comprar4").innerHTML = `<button id="C4" type="button" class="w-100 btn btn-lg btn-primary" >Identifiquese para comprar</button>`;
          document.getElementById("comprar8").innerHTML = `<button id="C8" type="button" class="w-100 btn btn-lg btn-primary" >Identifiquese para comprar</button>`;
          let audio = new Audio(`${ruta}/assets/logoff.mp3`);
        audio.loop = false;
        audio.play(); 
        window.setTimeout(function() {
          window.location.href = `${ruta}/index.html`;
      }, 5000);
          } 
        }
  // window.location.href="index.html";


// Función para comprar tc creada para agregar la cantidad de TC de las promos a la billetera del usuario al presionar el botón comprar

function comprar(b){
  let currentTc = +localStorage.getItem('TC');
  let compra = currentTc + b;
  localStorage.setItem('TC', `${compra}`);
  let audio = new Audio('./assets/comprartc.mp3');
    audio.loop = false;
    audio.play(); 
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="./assets/billetera.png" width="20px" /> ${compra} TC <img src="./assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
  // alert(`Gracias por comprar ${b} TimbaCoins :D , ahora tienes ${compra} TimbaCoins`);
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
      sonido = new Audio(`${ruta}/assets/compra4numeros.mp3`);
      sonido.loop = false;
      sonido.play(); 
      break;
    case (b == 800):
      sonido = new Audio(`${ruta}/assets/compra8numeros.mp3`);
      sonido.loop = false;
      sonido.play()
      break;
    default:
    sonido = new Audio(`${ruta}/assets/compra1numero.mp3`);
    sonido.loop = false;
    sonido.play(); 
  } 
  
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="${ruta}/assets/billetera.png" width="20px" /> ${compra} TC <img src="${ruta}/assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
  // alert(`Gracias por comprar ${b} TimbaCoins :D , ahora tienes ${compra} TimbaCoins`);
  // console.log(compra);
  // console.log(currentTc);
  if(currentTc < b){
    document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="${ruta}/assets/billetera.png" width="20px" /> ${compra} TC <img src="${ruta}/assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
    document.getElementById("comprar1").innerHTML = `<button id="C1" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="nope()">No te alcanza</button>`;
    document.getElementById("comprar4").innerHTML = `<button id="C4" type="button" class="w-100 btn btn-lg btn-primary" onclick="nope()">No te alcanza</button>`;
    document.getElementById("comprar8").innerHTML = `<button id="C8" type="button" class="w-100 btn btn-lg btn-primary" onclick="nope()" >No te alcanza</button>`;
  } else {
    localStorage.setItem('TC', `${compra}`);
    localStorage.setItem('CN', `${agregarNumeros}`);
    document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="${ruta}/assets/billetera.png" width="20px" /> ${compra} TC <img src="${ruta}/assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
    document.getElementById("comprar1").innerHTML = `<button id="C1" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="comprarNumero(1,100)">Comprar</button>`;
    document.getElementById("comprar4").innerHTML = `<button id="C4" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprarNumero(4,400)">Comprar</button>`;
    document.getElementById("comprar8").innerHTML = `<button id="C8" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprarNumero(8,800)" >Comprar</button>`;
  }
  console.log(currentTc,compra);
}


function nope(){
  let audio = new Audio(`${ruta}/assets/wrong.mp3`);
      audio.loop = false;
      audio.play(); 
      window.setTimeout(function() {
        window.location.href = 'loteria.html';
    }, 1500);
    
}

// Togle Botón login

function abrirLogin() {
  let audio = new Audio(`${ruta}/assets/pop.mp3`);
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
  let audio = new Audio(`${ruta}/assets/popout.mp3`);
  audio.loop = false;
  audio.play(); 
  document.getElementById("miLogin").style.display = "none";
}

// Togle Botón registrarse 

function abrirRegistro() {
  let audio = new Audio(`${ruta}/assets/pop.mp3`);
    audio.loop = false;
    audio.play(); 
  document.getElementById("miRegistro").style.display = "block";
  document.getElementById("miLogin").style.display = "none";
  // document.getElementById("miLogin").classList.toggle("d-none");
  document.getElementById("miRegistro").classList.add('swirl-in-fwd');
}

function cerrarRegistro() {
  let audio = new Audio(`${ruta}/assets/popout.mp3`);
  audio.loop = false;
  audio.play(); 
  document.getElementById("miRegistro").style.display = "none";
}

// Fin por el momento , en otras versiones del sistema se agregarán más interacciones con el usuario