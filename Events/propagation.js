let bp = document.getElementById('btn');
bp.addEventListener('mousedown', handlebp);
function handlebp(event) {
    if (event.button == 0) {
        event.stopPropagation();
    }
    else if (event.button == 2){
        console.log('right button clicked on BUTTON');
        event.stopPropagation();
    }
}

window.addEventListener('mousedown', () => console.log('button clicked'));