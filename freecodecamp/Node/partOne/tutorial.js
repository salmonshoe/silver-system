const sum = (numOne, numTwo) => numOne + numTwo;
const PI = 3.141592653;
class SomeMathObject {
    constructor() {
        console.log('object created');
    }
}
//To expose all three of these data types, we add properties to our module exports
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;

//This is also valid. Whichever works, just know you'll 
    //module.exports = {sum : sum, PI : PI, SomeMathObject: SomeMathObject}