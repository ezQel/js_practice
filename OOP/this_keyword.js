function speak(words){
    console.log(`the ${this.type +' '+ this.animal}  says ${words}`)
}

let bear = {animal : 'bear', type : 'brown', speak};
let koala = {animal : 'koala' , type : 'black', speak};

bear.speak("I'm grizzly");
koala.speak("I'm kool");