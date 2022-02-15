// Sitio ficticio Timbalandia por Diego Schmidt para coderhouse :D

// Esta versión del html y javascript son rudimentarios con el objetivo de completar el desafío DOM

// Declaramos funciones y variables iniciales
// Login rudimentarios, se complejizará al aprender otras cosas supongo ¿?

// Molestamos al usuario pidiéndole datos y esas cosas para el registro

function store(){

  let name = document.getElementById('name');
  let pw = document.getElementById('pw');
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if(name.value.length == 0){
      alert('Por favor ponga su email');

  }else if(pw.value.length == 0){
      alert('Por favor ponga un password');

  }else if(name.value.length == 0 && pw.value.length == 0){
      alert('Por favor ponga un email y una contraseña');

  }else if(pw.value.length > 8){
      alert('Máximo 8 carácteres');

  }else if(!pw.value.match(numbers)){
      alert('Por favor agregue un número');

  }else if(!pw.value.match(upperCaseLetters)){
      alert('por favor agregue por lo menos 1 letra mayúscula');

  }else if(!pw.value.match(lowerCaseLetters)){
      alert('Por favor agregue por lo menos 1 letra minúscula');

  }else{
      localStorage.setItem('name', name.value);
      localStorage.setItem('pw', pw.value);
 // Le damos 300 TimbaCoins de regalo al usuario y colocamos su estado en Logged yes     
      localStorage.setItem('TC', 300);
      localStorage.setItem('logged', 'yes');
      alert('Su cuenta fue creada con éxito :)');
      window.location.href="index.html";

  }
}

// Declaramos variables para usarlas en otras funciones

let estaLogeado = localStorage.getItem('logged');
let nombreLog = localStorage.getItem('name');
let timbCoins = localStorage.getItem('TC');


// Revisamos que los datos del login sean correctos y saludamos - Si el login es correcto se almacena el item Logged con el valor yes

function check(){
  let storedName = localStorage.getItem('name');
  let storedPw = localStorage.getItem('pw');

  let userName = document.getElementById('userName');
  let userPw = document.getElementById('userPw');
  // var userRemember = document.getElementById("rememberMe");

  if(userName.value == storedName && userPw.value == storedPw){
      alert('Te identificaste exitosamente :).');
      localStorage.setItem('logged', 'yes');
      document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${storedName}! :D ¿Todo bien? -- Tenés ${tc2} TC <img src="./assets/tc.gif" width="30px"/></h6>`;
  }else{
      alert('Usuario o contraseña incorrectos, pruebe de nuevo');
  }
}

// Revisamos si el usuario ya está identificado para mostrar los mensajes a usuarios logeados

if (estaLogeado == "yes"){
  document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button>`;
  document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>`;
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! :D ¿Todo bien? -- Tenés ${timbCoins} TC <img src="./assets/tc.gif" width="30px"/></h6>`;
  document.getElementById("comprar100").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="comprar(100)">Comprar</button>`;
  document.getElementById("comprar500").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(500)">Comprar</button>`;
  document.getElementById("comprar1000").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(1000)">Comprar</button>`;
} 

// Creamos la función salir para cambiar el estado de logged a no

function salir(){
  localStorage.setItem('logged', 'no');
  document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2" onclick="abrirRegistro()" >Registrarse</button>`;
  document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="abrirLogin()" >Ingresar</button>`;
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! hasta la próxima :D</h6>`;
  document.getElementById("comprar100").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="">Identifíquese para comprar</button>`;
  document.getElementById("comprar500").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="">Identifíquese para comprar</button>`;
  document.getElementById("comprar1000").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="">Identifíquese para comprar</button>`;
  let audio = new Audio('./assets/logoff.mp3');
    audio.loop = false;
    audio.play(); 
  // window.location.href="index.html";
}

// Función para comprar tc creada para agregar la cantidad de TC de las promos a la billetera del usuario al presionar el botón comprar

function comprar(b){
  let currentTc = +localStorage.getItem('TC');
  let compra = currentTc + b;
  localStorage.setItem('TC', `${compra}`);
  let audio = new Audio('./assets/comprartc.mp3');
    audio.loop = false;
    audio.play(); 
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! :D ¿Todo bien? -- Tenés ${compra} TC <img src="./assets/tc.gif" width="30px"/></h6>`;
  // alert(`Gracias por comprar ${b} TimbaCoins :D , ahora tienes ${compra} TimbaCoins`);
  console.log(compra);
}


// Togle Botón login

function abrirLogin() {
  document.getElementById("miLogin").style.display = "block";
  document.getElementById("miRegistro").style.display = "none";
}

function cerrarLogin() {
  document.getElementById("miLogin").style.display = "none";
}

// Togle Botón registrarse 

function abrirRegistro() {
  document.getElementById("miRegistro").style.display = "block";
  document.getElementById("miLogin").style.display = "none";
}

function cerrarRegistro() {
  document.getElementById("miRegistro").style.display = "none";
}

// Fin por el momento , en otras versiones del sistema se agregarán más interacciones con el usuario