// Venta de tickets de lotería para el sitio ficticio Timbalandia por Diego Schmidt para coderhouse :D

// Esta versión del html y javascript son rudimentarios con el objetivo de completar el desafío opcional número 1

// Declaramos las variables iniciales

let nombre = prompt("¿Cuál es su nombre?");
let email = prompt("Ingrese su correo electrónico");
let anio = parseInt(prompt("¿En qué año nació?"));
let fecha = new Date();
let anioActual = fecha.getFullYear();
let edad = anioActual - anio;

while (edad < 18 || isNaN(edad) || isNaN(nombre) || isNaN(email) ){

    document.write(`Usted es menor o no completó los datos, los menores no pueden jugar en Timbalandia <br/> <h3> ARTICULO 6. - A los efectos de la aplicación de las penas que establecen los artículos anteriores, todas las infracciones cometidas antes de la vigencia de la presente ley se computarán como una sola, cualquiera sea su número. <br/> En los casos previstos en el inc. 3 del art. 3, la circunstancia de que entre los apostadores se encuentre algún menor de 18 años, será considerada como circunstancia calificativa de agravación. </h3><br/> <h6>http://www.saij.gob.ar/legislacion/decreto_ley-nacional-6618-1957-prohibicion_juegos_azar.htm <br/> </h6> <img src="../assets/menores.jpg">`);
    window.location.pathname('menores.html');
    
} 



alert(`Usted tiene ${edad} años, Le damos la bienvenida a TimbaLandia ${nombre}`);
document.write(`Usted tiene ${edad} años, le damos la bienvenida a TimbaLandia ${nombre} <br/>`)


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





