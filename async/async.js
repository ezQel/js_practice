let users = [{
    name : 'Ezekiel Kalama'
},
{
    name: 'John Doe'
}];

async function printUsers(params) {
    let all = await users;    
    console.table(all);
}
printUsers();
console.log('users');