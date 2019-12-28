class Animal{
    constructor(lmbs, snd){
        this.lmbs = lmbs;
        this.snd = snd;
    }
    
    set limbs(no){
        this.lmbs = no;
    }

    set sound(sn){
        this.snd = sn;
    }

    get limbs(){
        return this.lmbs;
    }

    get sound(){
        return this.snd;
    }

    makeSound(){
        console.log(this.snd);
    }

}

class Cow extends Animal{
    constructor(color){
        super(4, 'mooo');
        this.colour = color;
    }   

    set color(color){
        this.colour = color;
    }

    get color(){
        return this.colour;
    }

    makeSound(){
        console.log(`the ${brownCow.color} cow says ${brownCow.sound}`);
    }
    
}

let brownCow = new Cow('brown');
brownCow.makeSound();
console.log(brownCow.limbs);