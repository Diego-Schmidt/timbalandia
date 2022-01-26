// Venta de tickets de lotería para el sitio ficticio Timbalandia por Diego Schmidt para coderhouse :D

// Esta versión del html y javascript son rudimentarios con el objetivo de completar el desafío opcional número 1

// Declaramos las variables iniciales

let nombre = prompt("¿Cuál es su nombre?");
let email = prompt("Ingrese su correo electrónico");
let anio = parseInt(prompt("¿En qué año nació?"));
let edad = 2022 - anio;

// Utilizamos un do while para checkear si el usuario es menor de edad

do {
if (edad >= 18) {
   
    alert(`Usted tiene ${edad} años, Le damos la bienvenida a TimbaLandia ${nombre}`);
    document.write(`Usted tiene ${edad} años, le damos la bienvenida a TimbaLandia ${nombre} <br/>`)
} else {

    // alert("Los menores de edad no pueden jugar, acceso bloqueado");
    document.write(`Usted tiene ${edad} años, los menores no pueden jugar en Timbalandia ${nombre} <br/>`);
    window.location.assign('menores.html');
    }
} while (edad < 18);   

// Espacio para publicidad y anuncios

alert("En TimbaLandia tenemos los mejores juegos de azar, ¡reserve sus tickets para la gran rifa!");
alert(`En caso de ser ganador le avisaremos a su correo ${email}`);

// Pedimos la cantidad de tickets que el usuario quiere comprar

let cantidadTickets = parseInt(prompt(`¿Cuántos tickets para la rifa vas a comprar ${nombre}?`));
for(let i= 20; i>= cantidadTickets ; i++){
    let resultado = cantidadTickets * i;
    
    alert('El precio por un ticket para la rifa es de '+ i + ' pesos argentinos y por '+ cantidadTickets + ' tickets'+ ' es de ' + resultado + ' pesos argentinos.' );

// Declaramos las formas de pago y el descuento que se aplica a cada forma

let porUala = resultado * 10 / 100;
let porMercadoPago =  resultado * 5 / 100;
let porBruBank = resultado * 20 / 100;
let final1 = resultado - porUala;
let final2 = resultado - porMercadoPago;
let final3 = resultado - porBruBank;

// Creamos el díalogo para la selección de la forma de pago y damos la información del precio final

let pago = prompt("¿Cómo vas a pagar? (1)Ualá, (2)MercadoPago o (3)Brubank")
if(pago == "1"){
    alert("Tenes 10% de descuento con Ualá");
    alert(`El precio final con descuento sería ${final1} pesos argentinos`)
    document.write(`Gracias por comprar ${cantidadTickets} tickets y pagar con Ualá, que tenga suerte ${nombre} y vuelva pronto :D`);
} else if(pago == "2"){
    alert("Tenes 5% de descuento con MercadoPago");
    alert(`El precio final con descuento sería ${final2} pesos argentinos`)
    document.write(`Gracias por comprar ${cantidadTickets} tickets y pagar con MercadoPago, que tenga suerte y vuelva pronto ${nombre} :D`);
}
 else if (pago == "3"){
    alert("Con Brubank tenés un 20% de descuento");
    alert(`El precio final con descuento sería ${final3} pesos argentinos`)
    document.write(`Gracias por comprar ${cantidadTickets} tickets y pagar con Brubank, que tenga suerte y vuelva pronto ${nombre} :D`);
}

    if(resultado >= 1){
        break;
    }
} 





