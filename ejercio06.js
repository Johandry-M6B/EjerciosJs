const prompt = require("prompt-sync")()

let numero = prompt("Ingrese un número: ")

if (numero >= 10 && numero <= 50) {
    console.log("El número valido")
}else {
    console.log("El número fuera de rango")
}
