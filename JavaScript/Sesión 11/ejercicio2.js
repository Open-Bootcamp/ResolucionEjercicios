class Figura{
    constructor(color){     
        this._color = color
    }
    get color(){
        return this._color
    }
    set color(color){
        this._color = color
    }
}

class Circulo extends Figura{
    constructor(radio, color){
        super(color);
        this._radio = radio;
    }
    get radio() {
        return this._radio;
    }
    set radio(radio) {
        this._radio = radio;
    }
}

class Rectangulo extends Figura{
    constructor(base, altura, color){
        super(color);
        this._base = base;
        this._altura = altura;
    }
    get base() {
        return this._base;
    }
    set base(base) {
        this._base = base;
    }
    get altura() {
        return this._altura;
    }
    set altura(altura) {
        this._altura = altura;
    }
}

let circulo = new Circulo(20, "verde");
console.log(circulo);
circulo.color = "rojo";
console.log(circulo);

let rectangulo = new Rectangulo(5,10,"azul");
console.log(rectangulo);