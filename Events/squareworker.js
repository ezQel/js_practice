let squareWorker = new Worker('code/webworker.js');
squareWorker.addEventListener('message', (event) =>{
    console.log('the worker responded:', event.data);
});

squareWorker.postMessage(20);