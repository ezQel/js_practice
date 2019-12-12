var pound = '#';

function multiPounds(amount){
    let pounds = '#';  
    for(let x = 0; x < amount; x++){
        pounds = pounds + pound
    }
    return pounds
}

for(let y = 0; y < 7; y++){
    console.log(multiPounds(y))
}