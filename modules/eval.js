let x = 0;

function evalAndReturnX(code) {
    eval(code);
    return x;
}

console.log(evalAndReturnX('x = x + 2'));