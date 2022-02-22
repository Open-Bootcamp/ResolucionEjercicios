class Figura{
    _color;
    constructor(color){     
    this._color = color
    }

    calcularArea(){
        console.log(-1)
    }

    getColor(){
        return _color
    }

    setColor(valor){
        this._color = valor
    }

}

class Circulo extends Figura{

    constructor(radio, color){
        super();
        this.radio = radio;
        this.color = color;

        this.calcularArea()

    }

    calcularArea(){
        console.log("El area del circulo es " + 3.14 *(this.radio * this.radio))
    }
}

class Rectangulo extends Figura{

    constructor(base, altura, color){
        super();
        this.base = base;
        this.altura = altura;
        this.color = color

        this.calcularArea()
    }

    calcularArea(){

        console.log("El rectangulo es de color " + this.color + " y el area del rectangulo es " + this.base * this.altura)
    }


}


let circulo1 = new Circulo(10,25)
let rectangulo1 = new Rectangulo(25,15,"Verde")