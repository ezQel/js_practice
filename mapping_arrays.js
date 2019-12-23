let arr = [
    {
        fname : 'John',
        sname : 'Doe'
    },
    {
        fname : 'Jane',
        sname : 'doe'
    },
    {
        fname : 'Ezekiel',
        sname : 'Kalama'
    }
];

let full_names = arr.map(ar => ar.fname + ' ' + ar.sname);
console.log(full_names);