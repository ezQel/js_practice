// get elements by tag name

let firstLink = document.body.getElementsByTagName('a')[0];
console.log(firstLink.href);

// get specific elements by id

let w3c = document.getElementById('W3c');
console.log(w3c.href);

let paragraphs = document.body.getElementsByTagName('p'); //gets a Node list object of all paragraphs in the document.
setTimeout(() => {
    document.body.insertBefore(paragraphs[2], paragraphs[0]); // removes paragraph three and puts it to the top
    setTimeout(() => document.body.insertBefore(paragraphs[2],paragraphs[1]), 2000); // removes new paragraph three and puts it to second
}, 2000); 

function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    if (image.alt) {
    let text = document.createTextNode(image.alt);
    image.parentNode.replaceChild(text, image);
    }
    }
    }

w3c.style.color = 'green'; // change w3c link color to green

let cat = document.querySelector('p img');
let angle = Math.PI / 2;
function animate(time, lastTime) {
if (lastTime != null) {
angle += (time - lastTime) * 0.001;
}
cat.style.top = (Math.sin(angle) * 20) + "px";
cat.style.left = (Math.cos(angle) * 200) + "px";
requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);