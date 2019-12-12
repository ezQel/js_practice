function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(chicken() + "came first."); //program will run out of space