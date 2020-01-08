//A promise is an asynchronous action that may complete at some point and produce a value
// The easiest way to create a promise is by calling Promise.resolve

function delayedGreeting(delay) {
    return new Promise(resolve => {setTimeout(() => resolve("Hello World"), delay)});
}

delayedGreeting(2000).then((value) => console.log(value));
console.log('brace yourselves. Incoming greetings');