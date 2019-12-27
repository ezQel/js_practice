class VaryingSize{
    constructor(num){
        this.num = num;
    }
    get size(){  //getters are dfined by writing get infront of the method name.
        return Math.floor(Math.random() * this.num);
    }
}
let varyingSize10 = new VaryingSize(10);
let varyingSize100 = new VaryingSize(100);
console.log(varyingSize10.size);
console.log(varyingSize100.size)