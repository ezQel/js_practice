let link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault(); // prevent default opening of the link
    alert('blocked');
});