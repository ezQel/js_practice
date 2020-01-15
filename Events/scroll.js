document.body.appendChild(document.createTextNode('Hello World '.repeat(2000)));
let progressBar = document.getElementById('progress');

window.addEventListener('scroll', updateProgress);

