function range(begin, end, step = 1) {
    let arr = [];
    
    if(step > 0){
        for (let x = begin; x <= end; x += step){
            arr.push(x);
        }
    }
    else{
        for (let x = begin; x >= end ; x += step){
            arr.push(x);
        }
    }
    
    
    return arr;
}

function sum(_arr) {
    let arr_sum = 0;
    for(let element of _arr){
        arr_sum += element;
    }    
    return arr_sum;
}

console.log(range(5, 2, -1));
console.log(sum(range(1, 10, 2)));