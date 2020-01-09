function* powers(n) {
    for (let x = n; n < Infinity ; x *= n){
        yield x;
    }
}

for (let p of powers(4)) { // get powers of 4
    if (p > 90){
        break;
    }
    console.log(p);
}