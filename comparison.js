console.log("hello" < "apple"); //Alphabetic order comparison ignoring Cases
console.log("zebra" > "lion"); //'''uppercase letters are always “less” than lowercase ones'''
console.log("hello" == "hello");
console.log("Hello" == "hello"); // not equal because Unicode values for Uppercase 'H' and lowercase 'h' are not equal
console.log("Hello" === "hello");  // === strict comparison makes sure the values are exact matches
console.log("hello" != "world");

console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(false && true);
console.log(false || 'hello'); // expression resolves as true if the left side results to true else the right side is executed
console.log(true || 'hello'); //'''
console.log(true && 'hello'); //if the left side is false the expression resolves to false else the right side is executed
console.log(false && 'hello') //'''

var x = 29;
var y = x > 5 || 'hello world'; // set value to 'hello world' if x>5 is false
console.log(y);

var z = x > 5 && 'hello world'; // set value to 'hello world' if x>5 is true
console.log(z);

// ternary/conditional operator
console.log(true ? 2:3);
console.log(false ? 2:3);

y = x > 5 ? 'yes' : 'no';
console.log(y);

z = x < 5 ? 'yes' : 'no';
console.log(z);