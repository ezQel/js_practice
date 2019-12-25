let Cow = {
    sound : 'moow'
};

Cow.makeSound = () => {
    console.log(`A cow says ${Cow.sound}`);
}
Cow._limbs = 4;

Cow.makeSound();
console.log(Cow._limbs);