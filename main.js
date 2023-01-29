// función para generar un número aleatorio
function generarNumero() {
    return Math.floor(Math.random() * 49) + 1;
}

  // función para adivinar el número
function adivinarNumero() {
    let numeroSecreto = generarNumero();
    let adivinanza;
    let intentos = 0;
    
    while (adivinanza !== numeroSecreto) {
    adivinanza = parseInt(prompt("Adivina el número (entre 1 y 50)"));
    intentos++;
    if (adivinanza == numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
    } else if (adivinanza > numeroSecreto) {
        console.log("El número es más pequeño");
    } else {
        console.log("El número es más grande");
    }
    if (adivinanza < numeroSecreto-5 ) {
        console.log("Estas muy lejos del numero ");
    }
    else if (adivinanza > numeroSecreto+5) {
        console.log("Estas muy lejos del numero ");
    }
    else if (adivinanza < numeroSecreto-10) {
        console.log("Estas lejos del numero ");
    }
    else if (adivinanza > numeroSecreto+10) {
        console.log("Estas lejos del numero ");
    }
    else if (adivinanza < numeroSecreto-20) {
        console.log("Estas cerca del numero ");
    }
    else if (adivinanza > numeroSecreto+20) {
        console.log("Estas cerca del numero ");
    }
}
}

  // como iniciar el juego
adivinarNumero();
