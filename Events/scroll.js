document.body.appendChild(document.createTextNode('Hello World '.repeat(2000)));
let progressBar = document.getElementById('progress');

window.addEventListener('scroll', updateProgress);

function updateProgress(event) {
    let max = document.body.scrollHeight - innerHeight;
    progressBar.style.width = `${pageYOffset / max * 100}%`;
}