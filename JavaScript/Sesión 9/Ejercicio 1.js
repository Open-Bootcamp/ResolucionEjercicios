function sumar(numero1, numero2)
{
  try {
      if(typeof(numero1) !== 'number' || typeof(numero2) !== 'number')    
        throw new Error(`Los valores introducido no son número, ${typeof(numero1)}: ${numero1}, ${typeof(numero2)}: ${numero2}`);
      return numero1 + numero2;
  } catch(ex) {
      return ex;
  }
}

console.log(sumar(['55'], 5) + "\n");

console.log(sumar(55, "cinco") + "\n");

console.log(sumar(55, 5) + "\n");

console.log(sumar(5.5, 5) + "\n");