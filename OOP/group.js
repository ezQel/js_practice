class Group{
    constructor(){
        this.ar = [];
        this.index = 0;
    }

    add(val){
        if (this.ar.indexOf(val) < 0){
            this.ar.push(val);
        }
    }

    delete(val){
        let arr = []
        this.ar.forEach(el => {
            if(el === val){

            }
            else{
               arr.push(el);
            }
        })
        this.ar = arr;
    }

    has(vl){
        for (let el of this.ar){
            if (el == vl){
                return true;
            }
        }
        return false;
    }

    [Symbol.iterator](){
        return new Group(this);
    }
    
    // next(){
    //     let index = 0;
    //     let value = 0;

    //     if(this.ar.length <= 0){
    //         return {done: true};
    //     }
    //     else{
    //         index = this.index;
    //         this.index ++;
    //         value = this.ar[index];
    //         return { value , done : false};
    //     }
    // }

    static from(ar){
        let g = new Group();
        for (let el of ar) {
            g.add(el);
        }
        return g;
    }

}

let grp = new Group();
grp.add(20);
console.log(grp.has(20));
grp.delete(20);
console.log(grp.has(20));

let grp2 = Group.from([9, 20, 45, 556, 67]);
// console.log(grp2.next());

// for(let m of grp2){
//     console.log(m);
// }
