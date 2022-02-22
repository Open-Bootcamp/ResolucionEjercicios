
//EJERCICIOS DEL TEMA 9

function sumar(a, b)
{
  try
    {
      if(typeof(a) !== 'number' || typeof(b) !== 'number')    
         throw new Error("Necesitas pasarle números a esta función para poder operar")   
  
      return a + b;
    }
  catch(ex)
    {
      console.log(ex)
    }
}


//ejemplo de ejecución

sumar([5,10,5,1], 10)
console.log('-------') // Con este console log vamos a dejar la salida por consola más ordenada


//Llamada ejemplo 2
sumar(5, "hola")
console.log('-------')

//Llamada ejemplo 2
sumar(2, 65)
console.log('-------')

//Llamada ejemplo 2
sumar(2, 1.30)
console.log('-------')

