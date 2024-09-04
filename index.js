//seteamos las variables
let numeroUno = document.getElementById("numero1");
let numeroDos = document.getElementById("numero2");
const tipoOperacion = document.querySelector("#operacion");
const textoError = document.getElementById("textoError");
let cartelError;
let operacion;
//cuando se da click activa la funcion de la operacion
tipoOperacion.addEventListener("click", handleAddEventList);

function handleAddEventList(e) {
  e.preventDefault();
  /*controlamos SOLO si los dos son numeros entonces podemos operar,
   de lo contrario mandamos un mensaje de error al usuario*/
  if (/^\d+$/.test(numeroUno.value) && /^\d+$/.test(numeroDos.value)) {
    /*guardamos el tipo de operacion en una variable para usarla en el switch*/
    operacion = e.target.id;
    primerValor = parseInt(numeroUno.value,10)
    segundoValor = parseInt(numeroDos.value,10)
    let resultadoDeOperacion;
    console.log(operacion);
    switch (operacion) {
        case "suma":
            resultadoDeOperacion = primerValor + segundoValor;
            break;
        case "resta":
            resultadoDeOperacion = primerValor - segundoValor;
            break;
        case "div":
            resultadoDeOperacion = primerValor / segundoValor;
            break;
        case "multi":
            resultadoDeOperacion = primerValor * segundoValor;
            break;
                        
        default:
            console.log("DEFAULT");
            break;
    }
    if (textoError.querySelector("#resultadoOperacion")) {
        textoError.removeChild(cartelError);
      } else {
        cartelError = document.createElement("label");
        cartelError.setAttribute("id", "resultadoOperacion");
        cartelError.innerHTML = "el resultado es : "+
          resultadoDeOperacion;
        textoError.appendChild(cartelError);
        
      }
    //console.log("SE SUMAN LOS NUMEROS");
    //console.log("RESULTADO ES : ",resultadoDeOperacion);
    
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