class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(vec){
        return new Vec(this.x + vec.x, this.y + vec.y);
    }
    minus(vec){
        return new Vec(this.x - vec.x, this.y - vec.y);
    }
    get length(){
        return Math.hypot(this.x, this.y);
    }
    toString(){
        return `${this.x}, ${this.y}`;
    }
}

let vector = new Vec(4,3);
console.log(vector.length);
console.log(vector.toString())
console.log(vector.minus(new Vec(4, 5)).toString());