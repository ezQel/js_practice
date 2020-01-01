// MultiplicatorUnitFailure Exception
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(numA, numB) {
    let random = Math.ceil(Math.random() * 10);
   
    if (random <= 2) {
        return numA * numB;
    }
    else {
        throw new MultiplicatorUnitFailure('cannot multiply');
    }
}

while (true) {
    try {
    console.log('succeded:', primitiveMultiply(2, 3));
    break;
    }
    catch (error) {
    if (error instanceof MultiplicatorUnitFailure) {
        console.log('failed');
    }
    else{
        throw error;
    }
    }
  }