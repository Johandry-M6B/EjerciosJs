const prompt = require("prompt-sync")()

let numero1 = Number(prompt("Imgresar un numero: "  ))
let numero2 = Number(prompt("Imgresar otro numero: "  ))

let operacion = prompt("Ingresar operacion a realizar (suma, resta, multiplicacion, diviision):  ")

switch (operacion){
    case "suma":
        console.log(`El resultado de la suma es: ${numero1 + numero2} `)
        break
    case  "resta":
        console.log(`El resultado de la resta es: ${numero1 - numero2} `)
        break
    case "multiplicacion":
        console.log(`El resultado de la multiplicacion es: ${numero1 * numero2} `)
        break  
    case "division":
        if (numero2 !== 0) {
            console.log(`El resultado de la division es: ${numero1 / numero2} `)
        } else {
            console.log("Error: No se puede dividir por cero.")
        }
        break
    default:
        console.log("Operación inválida. Debe ser suma, resta, multiplicacion o division.")
        break
}
