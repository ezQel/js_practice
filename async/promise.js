// A promise is an asynchronous action that may complete at some point and produce a value
// The easiest way to create a promise is by calling Promise.resolve
// A promise can also be created using the promise constructor.

function delayedGreeting(delay) {
    return new Promise(resolve => {setTimeout(() => resolve("Hello World"), delay)});
}

delayedGreeting(2000).then((value) => console.log(value));
console.log('brace yourselves. Incoming greetings');

// handling failures
let students = [
    {
        id : 0,
        name : 'Ezekiel Kalama'
    },
    {
        id : 1,
        name : 'John Doe'
    }
]

function getNameOrError(id) {
    return new Promise((resolve, reject) => {
        try{
            let name = students[id].name
            resolve(name);
        }
        catch(error){
            reject(new TypeError('FAil'));
        }
        
    });
}

getNameOrError(0).then((value) => {
    console.log(value);
}).catch(reason => {
    console.log('Error', reason);
});