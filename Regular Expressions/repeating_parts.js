// When you put a plus sign (+) after something in a regular expression, it
// indicates that the element may be repeated more than once.

let exp = /\d+/;

console.log(exp.test('hhel4lo'));

// The star (*) has a similar meaning but also allows the pattern to match zero times.

exp = /\d*/;
console.log(exp.test('34546'));
console.log(exp.test(''));

// A question mark makes a part of a pattern optional, meaning it may occur zero times or one time

exp = /\w\d?/;

console.log(exp.test('g4'));
console.log(exp.test('g'));

// To indicate that a pattern should occur a precise number of times, use braces

exp = /\d{3}/;
console.log(exp.test('359'));
console.log(exp.test('86'));

// It is also possible to specify a range this way: {2,4} means the element must occur at 
// least twice and at most four times.
exp = /\d{3,4}/;
console.log(exp.test('3466'));

