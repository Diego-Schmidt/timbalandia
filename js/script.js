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

console.log(ruta);

// Inicio DOM páginas

function paginaIndex(){
  document.getElementById("cuerpo").innerHTML = `<header class="fade-in">
  <div class="px-3 py-2 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto sm-auto text-white text-decoration-none">
          <img src="./assets/logo.png" width="60px" alt=""><h1 id="titulo" class="text-warning sm-fs-3 ms-4">Timbalandia!</h1>
        </a>

        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li>
            <a href="index.html" class="nav-link text-warning">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"/></svg>
              Inicio
            </a>
          </li>
          <li id="linkPanel">
            <a href="./pages/cuenta.html" class="nav-link ttext-warning">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
              Panel
            </a>
          </li>
         <!-- codigo reservado para versiones futuras -->
          <!-- <li>
            <a href="./pages/cuenta.html" class="nav-link ttext-warning">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
              Panel
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-warning">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"/></svg>
              Crypto
            </a>
          </li> -->
          <li>
            <a href="#" class="nav-link text-warning">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
              Juegos
            </a>
          </li>
          <li>
            <a href="./pages/loteria.html" class="nav-link text-warning">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
              Lotería
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-warning">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
              Contacto
            </a>
          </li>
          <!-- <li>
            <a href="#" class="nav-link text-warning">
              <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg>
              Acerca de
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
  <div class="px-3 py-2">
    <div class="container d-flex flex-wrap justify-content-center">
      <form id="formuLogin" class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
        <div id="saludo" class="bg-warning"><h6 class="text-default text-center border border-3 border-danger rounded">identifiquese para jugar</h6></div>
        <div id="avisoLoginPls" class="bg-warning"></div>
        <!-- Buscador desactivado porque no tiene función real por el momento -->
        <!-- <input type="search" class="form-control" placeholder="Buscar..." aria-label="Search"> -->
      </form>

      <div class="text-end">
        <div id="ingresarsalir"><button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="abrirLogin()" >Ingresar</button></div>
        
      </div>
      <div class="text-end">
        <div id="registrarse"><button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2" onclick="abrirRegistro()" >Registrarse</button></div>
      </div>
  </div> 
  

</header>
  
  <div class="container my-0">
    <main id="principal">
      <div class="form-popup rounded-3" id="miRegistro">
        <div class="login text-white">
          <form name='form-login'>
      
              <h1>REGISTRO</h1>
      
              <label for="name">Email</label>
              <input type="email" id="name" placeholder="Usuario" required>
      
              <label for="pw">Contraseña</label>
              <input type="password" id= "pw" placeholder="Password" required>
              
              <!-- Desactivado para usar en futuras versiones -->
              
              <!-- <div class="flex-column"><label for="avatar">Tu foto</label>
              <input type="file" id="avatar" name="foto" accept=".jpg,.png,.webp,.gif">>
              </div> -->
      
              <ul class="helper-text">
                  <!-- <li class="length">Al menos 8 carácteres de largo.</li>
                  <li class="lowercase">Debe contener una minúscula.</li>
                  <li class="uppercase">Tiene que contener una mayúscula.</li>
                  <li class="special">Debe contener un carácer especial como *.</li> -->
              </ul>

              <input class="text-dark" id="rgstr_btn" type="button" value="Registrarse" onclick="store()">
              <button type="button" class="btn cancel text-warning" onclick="cerrarRegistro()">Cerrar</button>
          </form>
      </div></div>
      <div class="form-popup" id="miLogin">
        <div id="loginform-html" class="login text-white rounded-3" style="--bs-bg-opacity: .9;">
          <form name='form-login'>
      
              <h1>Ingresar</h1>
      
              <label for="userName">Email</label>
              <input type="email" id="userName" placeholder="Email" required>
            
              <label for="userPw">Password</label>
              <input type="password" id= "userPw" placeholder="Contraseña" required>
      
              <!-- <div id="remember">
                  <input type="checkbox" value="lsRememberMe" id="rememberMe"
                         style="display: inline-block;">
                  <label>Remember me</label>
              </div> -->
      
              <input class="text-dark" id= "login_btn" type="button" value="Login" onclick="check()">
              <button type="button" class="btn cancel text-warning" onclick="cerrarLogin()">Cerrar</button>
          </form>
      </div></div>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm bg-success pack100" style="--bs-bg-opacity: .9;">
            <div class="card-header py-3">
              <img src="./assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal text-white">100 TC</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title text-white">100 AR$</h1>
              <ul class="list-unstyled mt-3 mb-4 text-white">
                <li>100 Timbacoins</li>
                <li>Acceso a todos los juegos liga Trebol</li>
                <li>1 número de regalo para la lotería</li>
                <li>10% de chance de ganar un premio extra en cada sorteo</li>
              </ul>
              <div id="comprar100"><button id="100TC" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="doLoginPls()">Identifíquese para Comprar</button></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm bg-warning pack500" style="--bs-bg-opacity: .9;">
            <div class="card-header py-3">
              <img src="./assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal">500 TC</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">500 AR$</h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>500 Timbacoins</li>
                <li>Acceso a todos los juegos liga Oro</li>
                <li>2 números de regalo para la lotería</li>
                <li>25% de chances de ganar un premio extra en cada sorteo</li>
              </ul>
              <div id="comprar500"><button id="500TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="doLoginPls()">Identifíquese para Comprar</button></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm bg-danger pack1000" style="--bs-bg-opacity: .9;">
            <div class="card-header py-3 text-white" style="--bs-bg-opacity: .9;">
              <img src="./assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal">1000 TC</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">1000 AR$</h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>1000 Timbacoins</li>
                <li>Acceso atodos los juegos liga Rubí</li>
                <li>3 números de regalo para la lotería</li>
                <li>30% de posibilidades de ganar un premio extra en cada sorteo</li>
              </ul>
              <div id="comprar1000"><button  id="1000TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="doLoginPls()">Identifíquese para Comprar</button></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  
  <!-- Inicio del footer -->

<div class="container">
  <footer class="d-flex flex-wrap justify-content-around align-content-center align-items-center py-3 my-4 bg-dark text-warning fade-in">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
      </a>
      <span class="">&copy; 2022 Timbalandia!</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex text-center text-warning">
      <i class="fi-snsuxl-facebook me-2" style="color: rgb(255, 208, 0);"></i>
      <i class="fi-xnsuxl-twitter-solid me-2" style="color: rgb(255, 208, 0);"></i>
      <i class="fi-xnsuxl-instagram" style="color: rgb(255, 208, 0);"></i>
    </ul>
  </footer>
</div>
    <script src="./js/script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`;
  let audio = new Audio(`${ruta}/assets/entrar.mp3`);
  audio.loop = false;
  audio.play(); 
  let audiobg = new Audio(`${ruta}/assets/bgmusic.mp3`);
  audiobg.loop = true;
  audiobg.volume = 0.9,
  audiobg.play(); 
}


// Fin DOM páginas

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
      document.getElementById("loginform-html").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Bienvenido ${storedName}! <img src="${ruta}/assets/logo.png" width="100px"/> </h6>`;
      let audio = new Audio(`${ruta}/assets/login.mp3`);
      audio.loop = false;
      audio.play(); 
      window.setTimeout(function() {
        window.location.href = 'index.html';
    }, 5000);
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
    document.getElementById("loginform-html").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! <img src="${ruta}/assets/logotriste.png" width="100px"/> </h6>`;
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
        document.getElementById("loginform-html").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! <img src="${ruta}/assets/logotriste.png" width="100px"/> </h6>`;
        let audio = new Audio(`${ruta}/assets/logoff.mp3`);
      audio.loop = false;
      audio.play(); 
      window.setTimeout(function() {
        window.location.href = '../index.html';
    }, 5000);
        } 
        else if (pagina == "cuenta.html"){
          localStorage.setItem('logged', 'no');
          document.getElementById("linkPanel").style.display = "none";
          document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button>`;
          document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>`;
          document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! hasta la próxima :D</h6>`;
          document.getElementById("loginform-html").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! <img src="${ruta}/assets/logotriste.png" width="100px"/> </h6>`;
          let audio = new Audio(`${ruta}/assets/logoff.mp3`);
        audio.loop = false;
        audio.play(); 
        window.setTimeout(function() {
          window.location.href = '../index.html';
      }, 5000);
          } 
        }
  // window.location.href="index.html";


// Función para comprar tc creada para agregar la cantidad de TC de las promos a la billetera del usuario al presionar el botón comprar

function comprar(b){
  let currentTc = +localStorage.getItem('TC');
  let compra = currentTc + b;
  localStorage.setItem('TC', `${compra}`);
  let audio = new Audio(`${ruta}/assets/comprartc.mp3`);
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