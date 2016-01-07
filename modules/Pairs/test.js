const {sumPairs, sumArr} = require("./sum_pairs");

let assertEquals = (a, b) => { // checks whether two values are equal
    return a === b;
}

let allTrue = (arr) => {  // checks whether the entire array is filled with true value
    for (let y of arr) {
        if(!y){
            
            return false;
        }
    }
    return true;
}

// test sumArr function
function testSumArr(){
    let ar = [5, 3];
    let sum = 8;
    if (assertEquals(sum, sumArr(ar))){
        console.log("sumArr Test passed");
    }
    else{
        console.log("sumArr Test failed");
    }
}

testSumArr();

// test sumPairs
function testSumPairs(){
    let num = 40;
    let sums = sumPairs(num);
    let res = [];
    
    for (let x of sums) {
        res.push(assertEquals(sumArr(x), num));
    }
    if (allTrue(res)){
        console.log("SumPairs Test passed");
    }
    else{
        console.log("SumPairs Test failed");
    }
}

testSumPairs();