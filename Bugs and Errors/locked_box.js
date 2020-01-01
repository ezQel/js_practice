const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;}
};

function withBoxUnlocked(fun) {
    if (box.locked) {
        box.unlock();
    }
    try{
        fun();
    }
    catch(error){
        console.log(error);
    }
    finally{
        box.lock();
    }
}

withBoxUnlocked(() => {
    box.content.push(0, 4, 5 , 5);
    console.log(box.content)
});