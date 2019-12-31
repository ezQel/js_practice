// are checks inside a program to verify that something id the way it is supposed to be
// e.g -> firstElement function below prevents accessing undefined first value of empty array

function firstElement (array) {
    if (array.length == 0) {
        throw new Error('Empty Array: firstelement called with empty array');
    }

    return array[0];
}

firstElement([]);