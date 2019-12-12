// bindings declared with let and const are local to the block they are declared in 
// whereas those declared with var are in the function or global scope

let x = 10;
if (true) {
let y = 20;
var z = 30;
console.log(x + y + z);

}
// y is not visible here byt z is
console.log(x + z);