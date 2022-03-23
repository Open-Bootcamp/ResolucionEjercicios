import moment from "moment"

function saludar(nombre){
    console.log(`Hola, ${nombre}`)
}

function hora(){
    console.log("La hora es " +  moment().hour() + ":" + moment().minute());
}

export {saludar, hora}