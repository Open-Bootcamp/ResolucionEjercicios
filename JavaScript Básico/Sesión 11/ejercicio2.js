class Figura{
    _color;
    constructor(color){     
    this._color = color
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
    }
}

class Rectangulo extends Figura{

    constructor(base, altura, color){
        super();
        this.base = base;
        this.altura = altura;
        this.color = color
    }
}