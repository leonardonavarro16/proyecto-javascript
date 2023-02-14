// función para generar un número aleatorio
// function generarNumero() {
//     return Math.floor(Math.random() * 49) + 1;
// }

//   // función para adivinar el número
// function adivinarNumero() {
//     let numeroSecreto = generarNumero();
//     let adivinanza;
//     let intentos = 0;
    
//     while (adivinanza !== numeroSecreto) {
//     adivinanza = parseInt(prompt("Adivina el número (entre 1 y 50)"));
//     intentos++;
//     if (adivinanza == numeroSecreto) {
//         console.log("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
//     } else if (adivinanza > numeroSecreto) {
//         console.log("El número es más pequeño");
//     } else {
//         console.log("El número es más grande");
//     }
//     if (adivinanza < numeroSecreto-5 ) {
//         console.log("Estas muy lejos del numero ");
//     }
//     else if (adivinanza > numeroSecreto+5) {
//         console.log("Estas muy lejos del numero ");
//     }
//     else if (adivinanza < numeroSecreto-10) {
//         console.log("Estas lejos del numero ");
//     }
//     else if (adivinanza > numeroSecreto+10) {
//         console.log("Estas lejos del numero ");
//     }
//     else if (adivinanza < numeroSecreto-20) {
//         console.log("Estas cerca del numero ");
//     }
//     else if (adivinanza > numeroSecreto+20) {
//         console.log("Estas cerca del numero ");
//     }
// }
// }

//   // como iniciar el juego
// adivinarNumero();

const botonComenzar = document.querySelector('button');
const feedback = document.querySelector('#feedback');

// Funciones esenciales del proceso a simular
function generarNumero() {
  return Math.floor(Math.random() * 49) + 1;
}

function adivinarNumero() {
let numeroSecreto = generarNumero();
let adivinanza;
let intentos = 0;

while (adivinanza !== numeroSecreto) {
    adivinanza = parseInt(prompt("Adivina el número (entre 1 y 50)"));
    intentos++;
    if (adivinanza == numeroSecreto) {
    feedback.textContent = "¡Felicidades! Adivinaste el número en " + intentos + " intentos.";
    } else if (adivinanza > numeroSecreto) {
    feedback.textContent = "El número es más pequeño";
    } else {
    feedback.textContent = "El número es más grande";
    }

    // Objetos de JS
    const objetos = [
    { nombre: "Bolígrafo", precio: 1 },
    { nombre: "Libreta", precio: 5 },
    { nombre: "Lápiz", precio: 2 },
    { nombre: "Goma de borrar", precio: 3 },
    { nombre: "Regla", precio: 4 }
    ];

    // Arrays
    const precios = objetos.map(objeto => objeto.precio);

    // Métodos de búsqueda y filtrado sobre el Array
    const objetoMasCaro = objetos.reduce((anterior, actual) => anterior.precio > actual.precio ? anterior : actual);
    const objetosBaratos = objetos.filter(objeto => objeto.precio < 3);

    if (adivinanza < numeroSecreto - 5) {
    feedback.textContent += " Estás muy lejos del número";
    } else if (adivinanza > numeroSecreto + 5) {
    feedback.textContent += " Estás muy lejos del número";
    } else if (adivinanza < numeroSecreto - 10) {
    feedback.textContent += " Estás lejos del número";
    } else if (adivinanza > numeroSecreto + 10) {
    feedback.textContent += " Estás lejos del número";
    } else if (adivinanza < numeroSecreto - 20) {
    feedback.textContent += " Estás cerca del número";
    } else if (adivinanza > numeroSecreto + 20) {
    feedback.textContent += " Estás cerca del número";
    }
}
}

// Event listener para iniciar el juego
botonComenzar.addEventListener('click', adivinarNumero);