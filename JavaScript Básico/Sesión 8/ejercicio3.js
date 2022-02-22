let array = ["Persona1", "Persona2", "Persona3", "Persona4",]
let arrayFalso = "array falso"

//Ejercicio 3

function eliminarUltimo(array){
    if(typeof(array) != 'object')
        return console.log("El parámetro de entrada no es un array")
    else
        array.pop();

    console.log(array);
}

eliminarUltimo(arrayFalso)