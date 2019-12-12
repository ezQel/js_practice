function power(_base, _exponent) {

    if (_exponent == 0){
        return 1;
    }
    else{
        return _base * power(_base, _exponent -1);
    }
}   

console.log(power(2, 2));