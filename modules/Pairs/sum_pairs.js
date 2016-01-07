//get all pairs of non negative whole numbers that add up to a given number

exports.sumPairs = function (num) { 
    let incr = 1;
    let decr = num - 1;
    let pairs = [];

    while (incr < num && decr > 0) {
        pairs.push([incr, decr]);
        incr ++;
        decr --;
    }
    
    return pairs;
}

