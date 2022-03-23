function sumar(numero1, numero2){
    let resultado = numero1 + numero2;
    console.log(resultado);
    return resultado;
}

function restar(numero1, numero2){
    let resultado = numero1 - numero2;
    console.log(resultado);
    return resultado;
}

function multiplicar(numero1, numero2){
    let resultado = numero1 * numero2;
    console.log(resultado);
    return resultado;
}

function dividir(numero1, numero2){
    if(numero2 == 0) {
        return console.log("No se puede dividir por cero");
    } else { 
        let resultado = numero1 / numero2;
        console.log(resultado);
        return resultado;
    } 
}

numero1 = 35;
numero2 = 5;

sumar(numero1, numero2)
restar(numero1, numero2)
multiplicar(numero1, numero2)
dividir(numero1, numero2)