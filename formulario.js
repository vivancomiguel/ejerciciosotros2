/* La funcion consiste en agregar invitados siempre y cuando el formulario se realice correctamente */
const formulario = document.querySelector(".formulario"); // Se cambio #form por .formulario

formulario.onsubmit = function(e) {
  e.preventDefault();
  console.log("envia")
  
  // Los elementos se son declarados con const o let em lugar de const, se renombran y se incluye ;
  // Se identan los elementos
  const elemNombre = formulario.elements[0];
  const elemEdad = formulario.elements[1];
  const elemNacionalidad = formulario.elements[2];

  const nombre = elemNombre.value; // Cambia let por const
  const edad = elemEdad.value;
  const selectedNacionalidad = elemNacionalidad.selectedIndex; // Cambie i por un nombre mas descriptivo
  const nacionalidad = elemNacionalidad.options[selectedNacionalidad].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    elemNombre.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    elemEdad.classList.add("error");
  }

  if (nombre.length > 0 && 
    (edad > 18 && edad < 120) ) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

// Este bloque esta extra
/*const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);*/


function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }
const lista = document.getElementById("lista-de-invitados");

const elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); // En vez de added es add
console.log(elementoLista);
console.log(lista);
lista.appendChild(elementoLista);

const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
  const spanNombre = document.createElement("span");
  const inputNombre = document.createElement("input");
  const espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor ;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
}
crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}