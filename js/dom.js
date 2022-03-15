function domSalirIndex(){
    document.getElementById("linkPanel").style.display = "none";
    document.getElementById("linkTop10").style.display = "none";
    document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2" onclick="abrirRegistro()" >Registrarse</button>`;
    document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="abrirLogin()" >Ingresar</button>`;
    document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! hasta la próxima :D</h6>`;
    document.getElementById("comprar100").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="">Identifíquese para comprar</button>`;
    document.getElementById("comprar500").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="">Identifíquese para comprar</button>`;
    document.getElementById("comprar1000").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="">Identifíquese para comprar</button>`;
    document.getElementById("loginform-html").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! <img src="${ruta}/assets/logotriste.png" width="100px"/> </h6>`;
}

function domSalirLoteria(){
    document.getElementById("linkPanel").style.display = "none";
    document.getElementById("linkTop10").style.display = "none";
        document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button>`;
        document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>`;
        document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! hasta la próxima :D</h6>`;
        document.getElementById("comprar1").innerHTML = `<button id="C1" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning">Identifiquese para comprar</button>`;
        document.getElementById("comprar4").innerHTML = `<button id="C4" type="button" class="w-100 btn btn-lg btn-primary" >Identifiquese para comprar</button>`;
        document.getElementById("comprar8").innerHTML = `<button id="C8" type="button" class="w-100 btn btn-lg btn-primary" >Identifiquese para comprar</button>`;
        document.getElementById("loginform-html").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! <img src="${ruta}/assets/logotriste.png" width="100px"/> </h6>`;
}

function domSalirCuenta(){
    document.getElementById("linkPanel").style.display = "none";
    document.getElementById("linkTop10").style.display = "none";
          document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button>`;
          document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>`;
          document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! hasta la próxima :D</h6>`;
          document.getElementById("loginform-html").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Chau ${nombreLog}! <img src="${ruta}/assets/logotriste.png" width="100px"/> </h6>`;
}

function domIsLogged(){
    document.getElementById("linkPanel").style.display = "block";
    document.getElementById("linkTop10").style.display = "block";
    document.getElementById("registrarse").innerHTML = `<button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button>`;
    document.getElementById("ingresarsalir").innerHTML = `<button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>`;
    document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="${ruta}/assets/billetera.png" width="20px" /> ${timbCoins} TC <img src="${ruta}/assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
}

function domIsLoggedIndex(){
    document.getElementById("comprar100").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="comprar(100)">Comprar</button>`;
  document.getElementById("comprar500").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(500)">Comprar</button>`;
  document.getElementById("comprar1000").innerHTML = `<button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(1000)">Comprar</button>`;
}

function domIsLoggedLoteria(){
    document.getElementById("comprar1").innerHTML = `<button id="C1" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="comprarNumero(1,100)">Comprar</button>`;
  document.getElementById("comprar4").innerHTML = `<button id="C4" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprarNumero(4,400)">Comprar</button>`;
  document.getElementById("comprar8").innerHTML = `<button id="C8" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprarNumero(8,800)">Comprar</button>`;
}

function domLoggedIn(){
    document.getElementById("linkPanel").style.display = "block";
    document.getElementById("linkTop10").style.display = "block";
      document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="./assets/billetera.png" width="20px" /> ${timbCoins} TC <img src="./assets/tc.gif" width="20px"/> Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
      document.getElementById("loginform-html").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Bienvenido ${nombreLog}! <img src="${ruta}/assets/logo.png" width="100px"/> </h6>`;
}

function domNoAlcanza(){
    document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="${ruta}/assets/billetera.png" width="20px" /> ${compra} TC <img src="${ruta}/assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
    document.getElementById("comprar1").innerHTML = `<button id="C1" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="nope()">No te alcanza</button>`;
    document.getElementById("comprar4").innerHTML = `<button id="C4" type="button" class="w-100 btn btn-lg btn-primary" onclick="nope()">No te alcanza</button>`;
    document.getElementById("comprar8").innerHTML = `<button id="C8" type="button" class="w-100 btn btn-lg btn-primary" onclick="nope()" >No te alcanza</button>`;
}
function domAlcanza(){
    document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${nombreLog}! <img src="${ruta}/assets/billetera.png" width="20px" /> TC <img src="${ruta}/assets/tc.gif" width="20px"/>Tienes ${cantidadNumerosLoteria} Lotis</h6>`;
    document.getElementById("comprar1").innerHTML = `<button id="C1" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="comprarNumero(1,100)">Comprar</button>`;
    document.getElementById("comprar4").innerHTML = `<button id="C4" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprarNumero(4,400)">Comprar</button>`;
    document.getElementById("comprar8").innerHTML = `<button id="C8" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprarNumero(8,800)" >Comprar</button>`;
}