class Animal{
    constructor(name){
        this._name = name;
    }

    feed(){
        return `fed`;
    }

    set color(color){
        this._color = color;
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    get color(){
        return this._color;
    }
}

let cow = new Animal('cow');
cow.color = 'Red';

let {name, color} = cow; //destructuring

console.log(`A ${color} ${name}`);