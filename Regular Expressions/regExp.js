// regular expressions in javascript can either be written with the RegExp constructor or using forward slashes
let re = new RegExp('abc');
let re2 = /abc/;

// some characters such as ? and + have special meanings and must be preceeded with a backslash. e.g
let eighteenplus = /eighteen\+/;

// testing for matches
console.log(re.test('abcsdddf')); //test returns true if the regex pattern is found in the string
console.log(re2.test('abdkdg')); //and false if the pattern is not found;