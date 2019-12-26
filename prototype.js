let creature = { name : 'human'};

console.log(creature.toString);
console.log(creature.toString());
console.log(creature.name.toString());

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(words){
    console.log(`the ${this.type} rabbit says ${words}`);
}

let WeirdRabbit = new Rabbit('weird');

WeirdRabbit.speak("I'm a weirdo");