let check = true;
let count = 0
let tiktok = setInterval(()=>{
    if (check) {
        console.log('tick');
        check = false;
    }
    else {
        console.log('tock');
        check = true;
    }
    count ++;
    if (count > 9){
        clearInterval(tiktok);
    }
}, 2000);

