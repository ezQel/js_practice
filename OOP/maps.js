let ages = new Map();

let fun = (n) => n * n

ages.set('Julia', 62);
ages.set('Liang', 22);
ages.set('Boris', 43);
ages.set('Square', fun);

console.log(ages.get('Julia'));
console.log(ages.get('Liang'));
console.log(ages.has('toString'));
console.log(ages.get('Square')(6));