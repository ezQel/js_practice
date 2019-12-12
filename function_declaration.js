function power(base, exponent){
    num = base;
    for(let x = 1; x < exponent; x++){
        num = num * base;
    }
    return num;
}

console.log(power(4, 3));