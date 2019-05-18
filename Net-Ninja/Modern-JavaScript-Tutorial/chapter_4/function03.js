//Returning Values
const calcArea = function(radius) {
    //let area = 3.14 * radius**2;
    //return area;
    return 3.14 * radius**2; //A simpler way to write the above code block
};

/*Sometimes we don't just want to log values into the console. Instead we can
have the function return values to us. To receive values back after performing
lines of code, we have the function 'return' values. In this example, logging 
the area value to the console will not help us with using the area value later on.
Area is limited bc it is a local variable.

That is why we use 'return' for our values. When we return, we take the values 
(returned to us) and store that returned value into a variable.*/

const area = calcArea(5);
console.log(area);

//ARROW FUNCTIONS
var calculate = (radius) => {
    return 3.14 * radius**2;
};
var Calculate = radius => 3.14 * radius**2;

/*If you are dealing with one parameter, then you can remove the use of a 
parenthesis. Any more or any less parameters will require the use of parenthesis.
If you are returning something simple in one line, then you can remove the
'return' keyword and the curly brackets.*/

//ARROW FUNCTION PRACTICE: Convert following functions into ES6 syntax

    // const greet = function () {
    //     return 'hello world';
    // }
const greet = () => 'hello world'
    const result = greet();
    console.log(result);

    // const bill = function(products, tax) {
    //     let total = 0;
    //     for (let i = 0; i < products.length; i++) {
    //         total += products[i] + products[i] * tax
    //     }
    //     return total
    // };
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax
    }
    return total
};
    console.log(bill([10,15,30], 0.2));