//seteamos las variables
const numeroUno = document.getElementById("numero1");
const numeroDos = document.getElementById("numero2");
const operacion = document.getElementById("operacion");
const textoError = document.getElementById("textoError");
let cartelError;

console.log("operacion: ",operacion);
//cuando se da click activa la funcion de la operacion
operacion.addEventListener("click", handleAddEventList);

function handleAddEventList(e) {
  e.preventDefault();
  /*controlamos SOLO si los dos son numeros entonces podemos operar,
   de lo contrario mandamos un mensaje de error al usuario*/
  if (/^\d+$/.test(numeroUno.value) && /^\d+$/.test(numeroDos.value)) {
    console.log("SE SUMAN LOS NUMEROS");
    /*chequeamos que boton fue apretado para saber que operacion realizar, vammos a hacer un switch para 
    ir cambiando de operacion*/
    operacion.addEventListener("click",function(event){
        console.log("fue clickeado el boton: ",event.target.id);
    });
  } else { 
    /* si alguno de los dos no es un numero entonces mostramos el cartel de error, controlando que si ya existe
    no se cree nuevamente */
    if (textoError.querySelector("#mensajeError")) {
      textoError.removeChild(cartelError);
    } else {
      cartelError = document.createElement("label");
      cartelError.setAttribute("id", "mensajeError");
      cartelError.innerHTML =
        "el campo debe ser numerico y no puede estar vacio";
      textoError.appendChild(cartelError);
      
    }
  }
}