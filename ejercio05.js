        
// (npm install prompt-sync)// instalar para poder usar prompt en node.js

const prompt = require("prompt-sync")({ sigint: true }); // llamar a la librería prompt-sync




const usuario = "admin" 
const password = "1234"

while (true) {
    const usuarioIngresado = prompt("Ingresar usuario:")
    const passwordIngresado = prompt("Ingresar contraseña:")
    if (usuario == usuarioIngresado && password == passwordIngresado) {
        console.log("Bienvenido al sistema")
        break;
    } else{
                console.log("Usuario o contraseña incorrectos, intente nuevamente")
            }
        }