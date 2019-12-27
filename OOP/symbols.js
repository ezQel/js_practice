class Rabbit{
    constructor(type){
        this.type = type;
    }
}

let sym = Symbol('name');

Rabbit.prototype[sym] = 90;

let blackRabbit = new Rabbit('black');
console.log(blackRabbit[sym]);