class Temperature{
    constructor(celcius){
        this.celcius = celcius;
    }

    get farenheight(){
        return this.celcius * 1.8 + 32; 
    }

    set farenheight(val){
        this.celcius = (val - 32) / 1.8;
    }

    static fromFarenheight(temp){
        return new Temperature((temp - 32) / 1.8);
    }
}

let _temp = new Temperature(30);
console.log(_temp.farenheight);
_temp.farenheight = 86;
console.log(_temp.farenheight);

let _temp2 = Temperature.fromFarenheight(99);
console.log(_temp2.farenheight)