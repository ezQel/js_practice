document.body.appendChild(document.createTextNode('Hello World '.repeat(2000)));
let progressBar = document.getElementById('progress');

window.addEventListener('scroll', updateProgress);

function updateProgress(event) {
    let max = document.body.scrollHeight - innerHeight;
    progressBar.style.width = `${pageYOffset / max * 100}%`;
}

let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");
for (let field of Array.from(fields)) {
field.addEventListener("focus", event => {
let text = event.target.getAttribute("data-help");
help.textContent = text;
});
field.addEventListener("blur", event => {
help.textContent = "";
});
}
