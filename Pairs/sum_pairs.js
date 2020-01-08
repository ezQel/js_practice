//get all pairs of non negative whole numbers that add up to a given number

exports.sumPairs = function (num) { 
    let incr = 1;
    let decr = num - 1;
    let pairs = [[0, num]];

    while (incr <= decr) {
        pairs.push([incr, decr]);
        incr ++;
        decr --;
    }
    
    return pairs;
};

exports.sumArr = (arr) => {
    let sum = 0;
    for(let x of arr){
        sum += x;
    }
    return sum;
};

