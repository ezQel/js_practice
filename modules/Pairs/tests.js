
exports.assertEquals = (a, b) => { // checks whether two values are equal
    return a === b;
};

exports.allTrue = (arr) => {  // checks whether the entire array is filled with true value
    for (let y of arr) {
        if(!y){
            
            return false;
        }
    }
    return true;
};
