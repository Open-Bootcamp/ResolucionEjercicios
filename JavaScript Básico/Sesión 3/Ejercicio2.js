for(let numero = 0; numero <=10; numero++)
{  
let resultado = true
  for (var i = 2; i < numero; i++) {
    if (numero%i==0){
      resultado = false;
    }
  }
  if (numero == 0 || numero == 1 )
    resultado = false
  if(resultado){
    console.log("Es número primo")
  }
  else
  {
    console.log(numero)
  }
}
