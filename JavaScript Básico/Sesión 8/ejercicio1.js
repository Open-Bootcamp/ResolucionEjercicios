//Ejercicio 1

function sumar(a, b){
    return console.log(a + b);
}

function restar(a, b){
    return console.log(a - b);
}

function multiplicar(a, b){
    return console.log(a * b);
}

function dividir(a, b){
    if(b == 0){
        return console.log("No se puede dividir entre 0");
    }else{
        return console.log(a / b);
    }
}

numero1 = 5;
numero2 = 10;

sumar(numero1, numero2)
restar(numero1, numero2)
multiplicar(numero1, numero2)
dividir(numero1, numero2)