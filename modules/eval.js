let x = 0;

function evalAndReturnX(code) {
    eval(code);
    return x;
}
console.log(evalAndReturnX('x = x + 2'));

let sum = Function('a, b', 'return a + b');
console.log(sum(3, 4));