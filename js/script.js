// Sitio ficticio Timbalandia por Diego Schmidt para coderhouse :D

// Esta versión del html y javascript son rudimentarios con el objetivo de completar el desafío DOM

// Declaramos las variables iniciales

// obtenemos la url de la página actual para tener información del usuario - se puede encriptar y desencriptar
// Login rudimentarios, se complejizará al aprender local storage ¿?

const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get('email');
const usuario = urlParams.get('usuario');
const clave = urlParams.get('psw');
const logged = urlParams.get('logged');

// Guardamos los datos de la url para futuro Acceso

localStorage.setItem('email',`${email}`);
localStorage.setItem('usuario',`${usuario}`);
localStorage.setItem('clave',`${clave}`);
localStorage.setItem('timbacoins','300');
localStorage.setItem('loggedIn',`${logged}`);

// Creamos variables para obtener los datos almacenados localmente

let storedEmail = localStorage.getItem('email');
let storedUsuario = localStorage.getItem('usuario');
let storedClave = localStorage.getItem('psw');
let billeteraTimbaCoins = localStorage.getItem('timbacoins');
let isLogged = localStorage.getItem('loggedIn');

// Botón de login en inicio, mostrar y ocultar box

function openForm() {
  document.getElementById("miLogin").style.display = "block";
}

function cerrarLogin() {
  document.getElementById("miLogin").style.display = "none";
}

const formu = document.getElementById("miLogin");

// obtenemos los datos del formulario de login para hacer el simulador

var submit_btn=document.getElementById("formuLogin");
		submit_btn.onclick=function(e)
		{
			e.preventDefault();
		}

// saludamos al usuario si se identifica y agregamos el botón salir, habilitamos botones de comprar

if (isLogged == "logged") {
  document.getElementById("saludo").innerHTML = `<h6 class="text-default text-center border border-3 border-success rounded">Saludos ${storedUsuario}! :D ¿Todo bien? tienes ${billeteraTimbaCoins} TC <img src="./assets/tc.gif" width="120px"/></h6>`;
  document.getElementById("ingresarsalir").innerHTML = '<button id="botonSalir" type="button" class="btn btn-light text-dark me-2" onclick="salir()" >Salir</button>';
  document.getElementById("100TC").innerHTML = '<button  id="100TC" type="button" class="w-100 btn btn-lg btn-primary">Comprar</button>';
  document.getElementById("500TC").innerHTML = '<button  id="500TC" type="button" class="w-100 btn btn-lg btn-primary">Comprar</button>';
  document.getElementById("1000TC").innerHTML = '<button  id="1000TC" type="button" class="w-100 btn btn-lg btn-primary">Comprar</button>';
  window.history.pushState({}, document.title, window.location.pathname);
} 
function salir(){
  localStorage.removeItem("loggedIn");
  // localStorage.removeItem('loggedIn');
  window.history.pushState({}, document.title, window.location.pathname);
  window.location.href="index.html";
}



// let nombre = prompt("¿Cuál es su nombre?");
// let email = prompt("Ingrese su correo electrónico");
// let anio = parseInt(prompt("¿En qué año nació?"));
// let fecha = new Date();
// const anioActual = fecha.getFullYear();
// let edad = anioActual - anio;

// Detectamos si el usuario pone su nombre y su email usando RegEx

// function validateEmail(email) 
//     {
//         var re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }

//     console.log(validateEmail(email));

// while (validateEmail(email) != true || isNaN(nombre) != true) {

//     document.write(`No colocó un email válido, intente de nuevo`);
//     window.location.pathname('menores.html');

// }

// While para detectar si el usuario es menor de edad 

// while (edad < 18 || isNaN(anio)){

//     document.write(`Usted es menor o no completó los datos, los menores no pueden jugar en Timbalandia <br/> <h3> ARTICULO 6. - A los efectos de la aplicación de las penas que establecen los artículos anteriores, todas las infracciones cometidas antes de la vigencia de la presente ley se computarán como una sola, cualquiera sea su número. <br/> En los casos previstos en el inc. 3 del art. 3, la circunstancia de que entre los apostadores se encuentre algún menor de 18 años, será considerada como circunstancia calificativa de agravación. </h3><br/> <h6>http://www.saij.gob.ar/legislacion/decreto_ley-nacional-6618-1957-prohibicion_juegos_azar.htm <br/> </h6> <img src="../assets/menores.jpg">`);
//     window.location.pathname('menores.html');
    
// } 

// alert(`Usted tiene ${edad} años, Le damos la bienvenida a TimbaLandia ${nombre}`);
// document.write(`Usted tiene ${edad} años, le damos la bienvenida a TimbaLandia ${nombre} <br/>`)


// // Espacio para publicidad y anuncios

// alert("En TimbaLandia tenemos los mejores juegos de azar, ¡reserve sus tickets para la gran rifa!");
// alert(`En caso de ser ganador le avisaremos a su correo ${email}`);


// // agregamos un class con datos sobre los resultados de los últimos 3 sorteos

// class sorteosAnteriores {
//   constructor(numero, fecha, numGanadores, premio, ganadores) {
//       this.numero = numero;
//       this.fecha = fecha;
//       this.numGanadores = numGanadores; 
//       this.premio = premio;
//       this.ganadores = ganadores;
//   }

//   // Método
//   infoSorteos() {
//       alert(`Sorteo número ${this.numero} de la fecha ${this.fecha}  , los números ganadores fueron ${this.numGanadores}  con un premio de ${this.premio} y un total de ${this.ganadores} ganadores`);
//   }
// }
// // Creamos nuevos objetos con información de sorteos anteriores

// const sorteo234 = new sorteosAnteriores(223, '22-02-2022', '7849 5624 3124 7489', '40000000 ARS', 5);
// const sorteo235 = new sorteosAnteriores(222, '26-02-2022', '7849 5624 3124 7489', '20000000 ARS', 10);
// const sorteo236 = new sorteosAnteriores(223, '29-02-2022', '7849 5624 3124 7489', '40000000 ARS', 5);


// // Creamos un array de objetos con sorteos anteriores para el sistema de búsqueda de sorteos anteriores

// const sorteos = [
//     { numero: 222, fecha: "01-01-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 223, fecha: "05-01-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 224, fecha: "09-01-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 225, fecha: "13-01-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 226, fecha: "17-01-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 227, fecha: "21-01-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 228, fecha: "25-01-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 229, fecha: "29-01-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 230, fecha: "03-02-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 231, fecha: "07-02-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 232, fecha: "10-02-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 233, fecha: "15-02-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 233, fecha: "15-02-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 233, fecha: "15-02-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 },
//     { numero: 233, fecha: "15-02-2022", numeros: "3542 2586 4896 3548", premio: "20 M ARS", ganadores: 10 }
    
//   ];
  

// // Mostramos información de sorteos anteriores recientes usando el template class sorteosAnteriores y el método infoSorteos

// let quiereInfoSorteosCercanos = prompt("¿Quiere ver información sobre los últimos 3 sorteos? escriba Si o No")
// if(quiereInfoSorteosCercanos === "Si"){
// alert("Información de sorteos anteriores");
// sorteo234.infoSorteos();
// sorteo235.infoSorteos();
// sorteo236.infoSorteos();
// }

// // Le preguntamos al usuario si quiere ver información sobre algún sorteo en específico y que indique el número del sorteo que quiere ver
// // Filtramos la información de sorteos usando el array de objetos llamado sorteos.

//  let quiereInfoSorteo = parseInt(prompt("¿Quiere ver información sobre algún sorteo en específico? escriba el número - del 222 al 236"));
//  if(isNaN(quiereInfoSorteo) != true || quiereInfoSorteo >= 222 || quiereInfoSorteo <= 239) {
// // Busco el sorteo por el número dado por el usuario en la variable quiereInfoSorteo, lo convierto a String para poder usarlo en alert y limpio carácteres no deseados del string con replace
// sorteoEncontradoRaw = sorteos.filter(c => c.numero === quiereInfoSorteo);
// sorteoEncontradoToString = JSON.stringify(sorteoEncontradoRaw);
// sorteoEncontradoLimpio = sorteoEncontradoToString.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ' ');
// alert(sorteoEncontradoLimpio);
//  }

// // Pedimos la cantidad de tickets que el usuario quiere comprar para la rifa

// alert("A continuación podrá comprar sus tickets para la rifa");
// alert("La cantidad máxima de tickets que puede comprar es de 20 y no puede ser 0");

// // Agregamos un do while para chequear la cantidad de tickets

// let cantidadTickets = parseInt(prompt(`¿Cuántos tickets para la rifa vas a comprar ${nombre}?`));
// let cantidadInput;
// while(cantidadTickets > 20 || isNaN(cantidadTickets) || cantidadTickets === 0){
//   document.write(`Cantidad de tickets incorrecta, intente de nuevo`);
//   window.location.pathname('cuenta.html');
// } 

// // Agregamos un for para multiplicar el precio por la cantidad de tickets

// for(let i= 20; i>= cantidadTickets ; i++){
//     let resultado = cantidadTickets * i;
    
//     alert('El precio por un ticket para la rifa es de '+ i + ' pesos argentinos y por '+ cantidadTickets + ' tickets'+ ' es de ' + resultado + ' pesos argentinos.' );

// // Declaramos las formas de pago y el descuento que se aplica a cada forma

// let porUala = resultado * 10 / 100;
// let porMercadoPago =  resultado * 5 / 100;
// let porBruBank = resultado * 20 / 100;
// let finalUala = resultado - porUala;
// let finalMercadoPago = resultado - porMercadoPago;
// let finalBruBank = resultado - porBruBank;

// // Generamos números de 4 dígitos al azar en un array y seleccionamos en base a la cantidad de tickets comprados

//   let elegidos = [];
//   while(elegidos.length < cantidadTickets){
//     //   var r = Math.floor(Math.random(9999 - 1000) * 100) + 1000;
//       var r = Math.floor(1000 + Math.random() * 9000);
//       if(elegidos.indexOf(r) === -1) elegidos.push(r);
//   }
//   console.log(elegidos);

// let susNumeros = elegidos.toString();

// // generamos el diálogo final

// let pago = prompt("¿Cómo vas a pagar? (1)Ualá, (2)MercadoPago o (3)Brubank")
// if(pago == "1"){
//     alert("Tenes 10% de descuento con Ualá");
//     alert(`El precio final con descuento sería ${finalUala} pesos argentinos`)
//     document.write(`Gracias por comprar ${cantidadTickets} tickets y pagar con Ualá, estos son sus números generados al azar ${susNumeros},  que tenga suerte ${nombre} y vuelva pronto :D`);
// } else if(pago == "2"){
//     alert("Tenes 5% de descuento con MercadoPago");
//     alert(`El precio final con descuento sería ${finalMercadoPago} pesos argentinos`)
//     document.write(`Gracias por comprar ${cantidadTickets} tickets y pagar con MercadoPago, estos son sus números generados al azar ${susNumeros}, que tenga suerte y vuelva pronto ${nombre} :D`);
// }
//  else if (pago == "3"){
//     alert("Con Brubank tenés un 20% de descuento");
//     alert(`El precio final con descuento sería ${finalBruBank} pesos argentinos`)
//     document.write(`Gracias por comprar ${cantidadTickets} tickets y pagar con Brubank, estos son sus números generados al azar ${susNumeros}, que tenga suerte y vuelva pronto ${nombre} :D`);
// }

//     if(resultado >= 1){
//         break;
//     }
// } 
