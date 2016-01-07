// this module uses other modules to return an object of the division, multiplication and sum of two numbers.

import sum from sum;
import divide from divide;
import multiply from multiply;

exports.operate = (a, b) => {
    return {'sum' : sum(a, b), 'division' : divide(a, b), 'multiply' : multiply(a,b)};
}