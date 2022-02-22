function generarAleatorio() {
    return parseInt((Math.random()+0.01)*20);
}

let numero = 1;

for(numero = 1; numero <= 10; numero++){
    console.log(generarAleatorio())
}