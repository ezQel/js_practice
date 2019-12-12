const area = function(length, width){
    return length * width;
}

const power = function(number, power){
    let num = number;
    for(let x = 1; x < power; x++){
        num *= number;
    }
    return num;
}

console.log(area(4, 5));
console.log(power(5, 3));