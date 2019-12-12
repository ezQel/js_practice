class Rectangle{
    constructor(length, width){
        this.length = length
        this.width = width
    }

    get area(){
        return this.calcArea()        
    }
    calcArea(){
        return this.length * this.width
    }
    
}

console.log(Rectangle.name);

var rect = new Rectangle(30,20);

console.log(rect.area);
