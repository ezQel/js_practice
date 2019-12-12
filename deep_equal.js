function deepEqual(_val, _val2){
    if(_val === _val2){
        return true;
    }
    else{
        let keys  = Object.keys(_val);
        let keys2 = Object.keys(_val2);

        for(let key of keys){
            console.log(_val[key])
            if (_val[key] != _val2[key]){    
                return false;
            }
        }
        return true;
    }
}

let det = {
    fname : 'Ezekiel',
    sname : 'Kalama'
};

console.log(deepEqual(det, {
    fname : 'Ezekiel',
    sname : 'Kalama'
}));