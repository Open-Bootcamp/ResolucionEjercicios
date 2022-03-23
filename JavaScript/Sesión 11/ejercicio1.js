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

let figura = new Figura("rojo")
console.log(figura.color);
figura.color = "verde";
console.log(figura.color);
