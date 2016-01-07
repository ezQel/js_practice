// return all positive pairs of whole numbers whose product is the number argument.

exports.productPairs = (num) => {
    let incr = 1;
    let decr = num;
    let pairs = [];

    while (incr <= num / incr) {
        if (num % incr == 0){
            pairs.push([incr, (num / incr)]);
        }
        incr ++;
    }
    return pairs;
}