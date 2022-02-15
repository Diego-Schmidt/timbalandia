// Sitio ficticio Timbalandia por Diego Schmidt para coderhouse :D

// Esta versión del html y javascript son rudimentarios con el objetivo de completar el desafío DOM

// Declaramos funciones y variables iniciales
// Login rudimentarios, se complejizará al aprender local storage ¿?

function store(){

  var name = document.getElementById('name');
  var pw = document.getElementById('pw');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

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
      localStorage.setItem('TC', 300);
      localStorage.setItem('logged', 'yes');
      alert('Su cuenta fue creada con éxito :)');
  }
}

var estaLogeado = localStorage.getItem('logged');
var nombreLog = localStorage.getItem('name');
var timbCoins = localStorage.getItem('TC');


// Revisamos que los datos del login sean correctos y saludamos - Si el login es correcto se almacena el item Logged con

function check(){
  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');
  // var userRemember = document.getElementById("rememberMe");

  if(userName.value == storedName && userPw.value == storedPw){
      alert('Te identificaste exitosamente :).');
      localStorage.setItem('logged', 'yes');
      document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${storedName}! :D ¿Todo bien? -- Tenés ${tc2} TC <img src="./assets/tc.gif" width="30px"/></h6>`;
  }else{
      alert('Usuario o contraseña incorrectos, pruebe de nuevo');
  }
}


if (estaLogeado == "yes"){
  document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button>`;
  document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>`;
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! :D ¿Todo bien? -- Tenés ${timbCoins} TC <img src="./assets/tc.gif" width="30px"/></h6>`;
  document.getElementById("comprar100").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="comprar(100)">Comprar</button>`;
  document.getElementById("comprar500").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(500)">Comprar</button>`;
  document.getElementById("comprar1000").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(1000)">Comprar</button>`;
} 

function salir(){
  localStorage.setItem('logged', 'no');
  window.location.href="index.html";
}

// Comprar tc

function comprar(b){
  let currentTc = +localStorage.getItem('TC');
  let compra = currentTc + b;
  localStorage.setItem('TC', `${compra}`);
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! :D ¿Todo bien? -- Tenés ${compra} TC <img src="./assets/tc.gif" width="30px"/></h6>`;
  alert(`Gracias por comprar ${b} TimbaCoins :D , ahora tienes ${compra} TimbaCoins`);
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

