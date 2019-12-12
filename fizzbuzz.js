function fuzzBuzz(number){
    let valHolder;
    if(number % 3 == 0){
        valHolder = 'fizz';
        if(number % 5 == 0){
            valHolder = valHolder + 'buzz';
        }
    }
    else if(number % 5 == 0){
        valHolder = 'buzz';
    }
    else{
        valHolder = number;
    }
    return valHolder;
}

for(let x = 1; x <= 100; x++){
   console.log(fuzzBuzz(x));
}