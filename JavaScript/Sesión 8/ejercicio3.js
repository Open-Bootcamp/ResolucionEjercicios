let array = ["a", "b", "c", "d",];
let texto = "abcd";

function eliminarUltimo(array){
    if(Array.isArray(array))
        if(array.length > 0) {
            array.pop();
            console.log(array);
        }
        else
            console.log("Es un array vacío");
    else
        console.log("El parámetro de entrada no es un array");
}

console.log(array);
eliminarUltimo(array);

console.log(texto);
eliminarUltimo(texto);