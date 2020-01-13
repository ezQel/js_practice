window.addEventListener('mousedown', (event) => {
   if (event.button == 0){
       console.log('Left Button Clicked');
   }
   else if (event.button == 1){
       console.log('Middle Button Clicked');
   }
   else if (event.button == 2){
       console.log('Right Button Clicked');
   }
});

let button = document.querySelector('button');
function once(params) {
    console.log('one-off event done');
    button.removeEventListener('click', once); // removeEventListener requires exact same arguments as those given to addEventListener
        
}
button.addEventListener('click', once);

