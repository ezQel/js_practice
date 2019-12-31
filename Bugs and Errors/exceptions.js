function promptDirection(direction) {
    let result = direction; //prompt(question)
    
    if (result.toLowerCase() === 'left') { return 'L';}
    if (result.toLowerCase() === 'right') {return 'R';}
    throw new Error('Invalid direction:' + result);
}

function look(direction) {
    if (promptDirection(direction) == 'L') {
        return 'a House';
    }
    else{
        return 'Two angry bears';
    }   
}

try {
    console.log('You see', look('LEFT'));
}
catch(error){
    console.log('something went wrong: ' + error);
}