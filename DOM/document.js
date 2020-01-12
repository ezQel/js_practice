// get elements by tag name

let firstLink = document.body.getElementsByTagName('a')[0];
console.log(firstLink.href);

// get specific elements by id

let w3c = document.getElementById('W3c');
console.log(w3c.href);

let paragraphs = document.body.getElementsByTagName('p'); //gets a NodeArray object of all paragraphs in the document.
setTimeout(() => {
    document.body.insertBefore(paragraphs[2], paragraphs[0]); // removes paragraph three and puts it to the top
    setTimeout(() => document.body.insertBefore(paragraphs[2],paragraphs[1]), 2000); // removes new paragraph three and puts it to second

}, 2000); 
