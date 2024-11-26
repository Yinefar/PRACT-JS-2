///PRÁCTICA DE CONDICIONALES

/*let edadPersona = 17
if(edadPersona>= 18 && edadPersona <= 60){
    console.log("Puedes ingresar al boliche")
} else if(edadPersona < 18) {
    console.log("Eres menor de edad")
} else {
    console.log("No se recomienda")
}*/

/*
let stilosMusica = 'Rock'

switch (stilosMusica) {
    case 'Punk': console.log("Te recomiendo los ramones")
    break;
    case 'Rock':  console.log("Te recomiendo Los Prisioneros")
    break;
    default: 
   console.log("No conoczco esta musica pero igual te recomiendo escucharla")

}*/


//////////////////////////////////////JUEGO - JS


// acá el juego selecciona un número al azar para que adivines 



let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0
let numeroAzar


//implementos

function num() {
    numeroAzar = Math.floor(Math.random()*100) + 1
    console.log(numeroAzar)
    document.getElementById('numberito').innerHTML = '?'
}
function limpiar() {
    location.reload();
}

// esta accion se ba a ejecutar cuando se dé clic al boton chequear


function chequearResultado(){
    intentos ++
    intento.textContent = intentos 
    let numeroIngresado = parseInt(numeroEntrada.value)
    
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y  100'
        mensaje.style.color   = 'black'
        return
    }

    if(numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el número!'
        mensaje.style.color = 'green'
        document.getElementById('numberito').innerHTML = numeroAzar
        return
    } else if (numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Más alto! El número es mayor al ingresado.'
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = '¡Más bajo! El número es menor al ingresado.'
        mensaje.style.color = 'red'
    }
}























