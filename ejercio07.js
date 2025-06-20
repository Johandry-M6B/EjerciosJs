const prompt = require("prompt-sync")()

let numero = prompt("Ingrese un número: ");

if (numero < 5){
    console.log("Insuficiente");
} else if (numero == 5 || numero == 6){
    console.log("Suficiente");
} else if (numero == 7){
    console.log("Bien");
} else if (numero == 8 || numero == 9){
    console.log("notable");
} else if (numero == 10){
    console.log("Sobresaliente");
} else {
    console.log("Número no válido");
}