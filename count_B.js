function countBs(_word) {   // returns number of UPPERCASE 'B' in a word
    return countChars(_word, 'B')
}

function countChars(_word, _char) { // counts occurence of given character in word
    let count = 0
    _word = String(_word).split('');

    _word.forEach(char =>{
        if(char === _char){
            count ++;
        }
    });
    return count; 
}

let word = 'BbbBbbB';

console.log(countBs(word));
console.log(countChars('Hello world', 'e'));