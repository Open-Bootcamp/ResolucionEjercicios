class Coche{
    _peso = 1750;
    _potencia = 120;
    _marca = "Opel"

    constructor(peso, potencia, marca){
        this._peso = peso;
        this._potencia = potencia;
        this._marca = marca 

        console.log("El vehiculo pesa " + peso + " kg. Tiene " + potencia + " caballos de potencia y es de la marca " + marca)
    }

    getPeso(){
        return _peso
    }

    setPeso(value){
        _peso = value
    }

    getPotencia(){
        return _potencia
    }

    setPotencia(value){
        _potencia = value
    }

    getMarca(){
        return _marca
    }

    setMarca(value){
        _marca = value
    }
}

let car = new Coche(1090, 210, "Audi");

car.setPeso(30)

module.export = {Coche};