// this module uses other modules to return an object of the division, multiplication and sum of two numbers.

const {sum} = require("./sum");
const {divide} = require("./divide");
const {multiply} = require("./multiply");

exports.operate = (a, b) => {
    return {'sum' : sum(a, b), 'division' : divide(a, b), 'multiplication' : multiply(a,b)};
}