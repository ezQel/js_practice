function repeat(t, f){
    let n = 0;
    while(n <= t){
        f(n);
        n += 1;
    }
}
function unless(test, then){
    if(!test){
        then();
    }
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n +" is even");
    });
});