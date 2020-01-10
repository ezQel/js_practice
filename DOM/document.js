// get elements by tag name
try{
    let firstLink = document.body.getElementsByTagName('a')[0];
    console.log(firstLink.href);
}
catch(error){
    console.log(error);

}
