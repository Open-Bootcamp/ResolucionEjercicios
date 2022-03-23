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
    calcularArea(){
        return -1;
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
    calcularArea(){
        return (Math.PI*Math.pow(this._radio,2)).toFixed(2);
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
    calcularArea(){
        return this._altura*this._base;
    }
}

let circulo = new Circulo(10, "verde");
console.log(circulo);
console.log(circulo.calcularArea());

let rectangulo = new Rectangulo(5,10,"azul");
console.log(rectangulo);
console.log(rectangulo.calcularArea());