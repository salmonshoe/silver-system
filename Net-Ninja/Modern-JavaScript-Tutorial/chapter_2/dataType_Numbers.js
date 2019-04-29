let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

// MATH OPERATORS +, - , * , /, **, %

console.log(10/2); //Division operator

let result = radius % 3; //Remainder operator spits out the remainder of the calculation
console.log(result);

let result02 = pi * radius**2 // Used mulitplier operator and the exponent operator to square the radius
console.log(result02);

//ORDER OF OPERATION IS BIDMAS
    //1. Brackets
    //2. Indexes, such as **
    //3. Division
    //4. Multiplication
    //5. Addition
    //6. Subtraction
let result03 = 5 * (10-3)**2;
console.log(result03);

//We can also use the adder JS operator alogn with shorthand operators.
let likes = 10;
//likes = likes + 1; is a simple approach
likes++; //Will add by 1 to 10. It is a better version because it applies dynamic code. Same can be done with subtracting as --;
likes += 9; //Will add the variable by 9 to the variable. Takes the current value and add by another value
likes -= 5; //Will take away by 5 from the variable value
likes *= 2; //Will multiply by 2 to the variable
likes /= 3; //Will divide by 
console.log(likes);

//NaN - not a Number. Shows doing a calculation where you cannot get a number
console.log(5 / 'hello');

//Number Concatenation! Similar to string concatenation
let update = 'The blog has ' + likes + ' likes.'
console.log(update);

// Temple Literals
const title = 'Best reads of 2019';
const author = 'Mario';
const like = 30;

    //Concatenation Way - very messy and hard to maintain
let sentence = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(sentence);

    //Temple String Way - inject variables into a string. You embed variables directly into a string data type through backtics
let snippet = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(snippet);

    //Creating HTML templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes.</span>
`;
console.log(html);