for (let numero = 1; numero < 101; numero++) {
  switch (numero % 2) {
    case 0:
      console.log("El número " + numero + " es par")
      break;
    case 1:
      console.log("El número " + numero + " es impar")
      break;
  }
}