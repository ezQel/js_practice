function reverse(_arr){
    let arr = [];
    for(let item of _arr){
        arr.unshift(item);
    }
    return arr;
}

function reverseArrayInPlace(_array){
    let arr = _array.slice();
    _array.splice(0, _array.length);
    for(let item of arr){
        _array.unshift(item);
    }
}

let array = [9, 6, 8, 3, 2];

console.log(reverse(array));
reverseArrayInPlace(array)
console.log(array);