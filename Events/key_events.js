window.addEventListener('keydown', (event) => {
    if (event.key == 'b' && event.ctrlKey){
        document.body.style.background = 'black';
    }
});
window.addEventListener('keyup', (event) => {
    if (event.key == 'b' && event.ctrlKey){
        document.body.style.background = '';
    }
});
