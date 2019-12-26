class Rabbit{   // class declaration
    constructor(type){ // constructor
        this.type = type;
    }
    speak(line){ // class method is automatically added to its protoype --> a class can have as many methods as is desired
        console.log(`the ${this.type} rabbit says ${line}`)
    }
}

let killerRabbit = new Rabbit('killer');
let weirdRabbit = new Rabbit('weird');

killerRabbit.speak("'here I go killing again'");
weirdRabbit.speak("'carrots have chemicals that enslave rabbitkind'");

Rabbit.prototype.scream = function(sound){ // class methods can be added to the class prototype
    console.log(`the ${this.type} rabbit screams ${sound}`);
}

killerRabbit.scream('noooooooo');
weirdRabbit.scream('weeeeeee');


let cow = new class{
    makesound(){
        console.log('moooo');
    }
}
cow.makesound();

Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);
console.log(weirdRabbit.teeth);

killerRabbit.teeth = 'long, sharp and bloody';
weirdRabbit.teeth = 'large incisors';

console.log(killerRabbit.teeth);
console.log(weirdRabbit.teeth);