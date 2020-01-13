window.addEventListener('click', () => console.log('You clicked'));

let button = document.querySelector('button');
function once(params) {
    console.log('one-off event done');
    button.removeEventListener('click', once); // removeEventListener requires exact same arguments as those given to addEventListener
        
}
button.addEventListener('click', once);

