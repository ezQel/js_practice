// Functions that operate on other functions, either by taking them as arguments
// or by returning them, are called higher-order functions

function greaterThan(m){
    return n => n > m;
}

let greaterTha5 = greaterThan(5)

console.log(greaterTha5(6))

function noisy(f){
    return (...args) => {
        let result = f(...args);
        return result;
    }
}

console.log(noisy(Math.min)(2, 9, 40))