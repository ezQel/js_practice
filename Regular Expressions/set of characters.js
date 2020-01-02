// putting a setof characters between square brackets makes that part of the expression match
// any of the characters between the brackets

console.log(/[0123456789]/.test('in 1992')); // test whether there is a digit in the string.
console.log(/[0-9]/.test('in 1992')); // same as above. (-) indicates a range of characters.

//any digit can be represented by \d. you could match a date and time format like 01-30-2003 15:20 with the following expression
function dateTimeOrNot(dt) {
    let dtime = /\d\d-\d\d-\d\d\d\d\s\d\d:\d\d/;
    if(dtime.test(dt)){
        return dt + ' is DateTime';
    }
    else{
        return dt + ' is not DateTime';
    }
    
}
console.log(dateTimeOrNot('01-30-2003 15:20'));

// to match any digit or period
console.log(/[\d.]/.test('943583'));
console.log(/[\d.]/.test('dfssdg'));

// to match any alphanumeric character
console.log(/\w/.test('sdfe'));

// to match any non alphanumeric character
console.log(/\W/.test('^?/'));
console.log(/\W/.test('dfg'));

// any non digit character
console.log(/\D/.test('^asf'));

// any whitespace charcter => space, tab or newline
console.log(/\s/.test('\n'));

// any non whitespace charcter
console.log(/\S/.test(' '));

// to express that you want to match any character except the ones 
// in the set—you can write a caret (^) character after
// the opening bracket
function nonBinary(bin) {
    let patt = /[^01]/;

    if (patt.test(bin)){
        return bin + ' is not binary';
    }
    else{
        return bin + ' is binary';
    }
}

console.log(nonBinary('0000000'));
console.log(nonBinary('3459889'));