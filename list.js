function arrayToList(_array){
    let _list = null;
    _array = _array.reverse();

    for (let _el of _array){
       _list = prepend(_el, _list);
    }
    return _list;
}

function listToArray_2(_lst){
    let arr = [];
    
    while(true){
        arr.push(_lst.value);

        if(_lst.rest == null){
            break;
        }
        else{
            _lst = _lst.rest;
        }
    }
    return arr;    
}

function listToArray(_lst){
    let arr = [];
    let n = 0;

    while(nth(_lst, n) != undefined){
        arr.push(nth(_lst, n));
        n ++;
    }
    return arr;
}

function prepend(_element, _ls){
    _ls = {
        value : _element,
        rest : _ls
    }
    return _ls;
}

function nth_2(_ls, _num){
    _val = undefined;
    while(_num >= 0){
        if(_ls == undefined){
            _val = undefined;
        }
        else{
            _val = _ls.value;
            _ls = _ls.rest;
        } 
        _num --;
    }
    return _val;
}

function nth(_ls, _num){ //recurse implementation of *nth*
    // console.log(_num);
    if(_num == 0){
        return _ls.value;
    }
    else{
        if(_ls.rest == null){
            return undefined;
        }
        else{
            return nth(_ls.rest, _num - 1);        
        }
        
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let list = {
    value : 1,
    rest : {
        value : 2, 
        rest : {
            value : 3, 
            rest : {
                value : 4,
                rest : null
            }
        }
    }
}

console.log(arrayToList(array));
console.log(listToArray(list));
console.log(nth(list, 4));