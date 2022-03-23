mibucle:
for (let numero = 0; numero < 11; numero++) {
  if (numero <= 1) {
    console.log(numero);
    continue mibucle;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      console.log(numero);
      continue mibucle;
    }
  }
  console.log("Es número primo");
}