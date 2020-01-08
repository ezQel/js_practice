const {sumPairs, sumArr} = require("./sum_pairs");
const {assertEquals, allTrue} = require("./tests");
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
function testSumPairs(num){
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

for (let x = 0; x < 100; x++){
    testSumPairs(x);
}