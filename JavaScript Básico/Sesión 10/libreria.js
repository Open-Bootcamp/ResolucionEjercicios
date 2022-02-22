import moment from "moment"

//Ejercicio 1

function saludar(nombre){
    console.log("Hola " + nombre)
}

moment()

function hora(){
    return moment().format()
}

export {saludar, hora}