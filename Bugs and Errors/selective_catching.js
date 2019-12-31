//define error class for selective catching
class InputError extends Error{}

function promptDirection(direction) {
    let result = direction; //prompt(question)
    
    if (result.toLowerCase() === 'left') { return 'L';}
    if (result.toLowerCase() === 'right') {return 'R';}
    throw new InputError('Invalid direction:' + result);
}

for(;;){
    try {
        let dir = promptDirection("left"); // ← typo!
        console.log("You chose ", dir);
        break;
        }
        catch (e) {
            if (e instanceof InputError){
                console.log("Not a valid direction. Try again.");
            }
            else{
                throw e;
            }
    }
}