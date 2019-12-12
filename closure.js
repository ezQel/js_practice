function multiply(num) {
    return number => number * num; // '''
}

function closure() {
    return multiply; // a function can return another function
}

let twice = multiply(2);
console.log(twice(5));

let mult = closure();
let twice_2 = mult(2);
console.log(twice_2(5))