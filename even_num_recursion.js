function isEven(_num) {
    if(_num == 0){
        return true;
    }
    else if(_num == 1){
        return false;
    }
    else if(_num < 0){
        return false;
    }
    else {
        return isEven(_num - 2);
    }
}

console.log(isEven(-1));