let bp = document.getElementById('btn');
bp.addEventListener('mousedown', handlebp);
function handlebp(event) {
   if (event.button == 2){
        console.log('right button clicked on BUTTON');
        event.stopPropagation();
    }
}

window.addEventListener('mousedown', () => console.log('button clicked'));

//Most event objects have a target property that refers to the node where they originated
let div = document.getElementById('target');
div.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    if (event.target.nodeName == 'BUTTON'){
        console.log('button', event.target.textContent,'Clicked');
    }
});