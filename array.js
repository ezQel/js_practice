var fruits = ['apples', 'oranges', 'mangoes', 'pears', 'bananas']
console.log(fruits.length)

var first = fruits[0]
console.log(first)

var last = fruits[fruits.length-1]
console.log(last)

// loop through elements
fruits.forEach(function(item, index, array) {
    console.log(item, index)
    
});

var morefruits = ['strawberry', 'pineapple', 'coconut']

fruits.push('pineapple')
console.log(fruits)

var last_fruit = fruits.pop()
console.log(last_fruit, fruits)

var first_fruit = fruits.shift()
console.log(first_fruit, fruits)

fruits.unshift('pineapple')
console.log(fruits)

var pos = fruits.indexOf('pineapple')
console.log(pos)

var vegetables = ['cabage', 'kale', 'collad', 'carrot', 'potatoes']
var first_3 = vegetables.splice(0, 3)
console.log(vegetables)
console.log(first_3)

var oems =['apple', 'hp', 'huawei', 'samsung']
var oems_copy = oems.slice()
console.log(oems)
console.log(oems_copy)