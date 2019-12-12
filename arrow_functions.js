const power = (base, exponent) => {
    num = base;
    for(let x = 1; x < exponent; x++){
        num = num * base;
    }
    return num;
}

const square = number => {
    return number * number;
}

const sqrt = num => Math.sqrt(num);

const hello = () => {
     console.log('Hello World'); 
}

console.log(power(4, 3))
console.log(square(4));
console.log(sqrt(4));
hello();