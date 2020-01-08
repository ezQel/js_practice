const {assertEquals} = require("./tests");
const {allTrue} = require("./tests");
const {productPairs} = require("./product_pairs");
const {product} = require("./product_pairs");

//test product
function testProduct() {
    let n = 9;
    let p = [3, 3];
    if (assertEquals(product(p), n)){
        console.log("product test passed");
    }
    else{
        console.log("product test failed");
    }
}
testProduct();

//test product pairs
function testProductPairs(num){
    let products = productPairs(num);
    let truth = [];

    for (let x of products) {
        truth.push(assertEquals(product(x), num));
    }

    if (allTrue(truth)){
        console.log("productPairs test passed");
    }
    else{
        console.log("productPairs test failed");
    }
}

testProductPairs(90);