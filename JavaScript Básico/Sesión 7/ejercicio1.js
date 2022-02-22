class Coche{
    peso = 1750;
    potencia = 120;
    marca = "Opel"

    constructor(peso, potencia, marca){
        this.peso = peso;
        this.potencia = potencia;
        this.marca = marca 

        console.log("El vehiculo pesa " + peso + " kg. Tiene " + potencia + " caballos de potencia y es de la marca " + marca)
    }
}

let car = new Coche(1090, 210, "Audi");

car.setpeso(30)

module.export = {Coche};