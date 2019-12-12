function power(base, exponent = 2) { // if second argument is not provided, the value 2 is used
    num = base;
    for(let x = 1; x < exponent; x++){
        num = num * base;
    }
    return num;
}
function minus(frstNum, secNum) {
    if (secNum == undefined){
        return -frstNum; // if second argument is missing the first value is negated and returned
    }
    else{
        return frstNum - secNum;
    }
}

console.log(power(2, 2));
console.log(power(2));
console.log(minus(5, 2));
console.log(minus(5));