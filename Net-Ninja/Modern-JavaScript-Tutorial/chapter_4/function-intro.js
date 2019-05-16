//FUNCTION DECLATATION: contains the code block we want to perform
    //No need to end your function declarations with a semicolon
function greet() {
    console.log('hello there');
}

//FUNCTION EXPRESSION: When you get a variable and set its value to a function.
    //Always have semicolons at the end of a function expression
const speak = function() {
    console.log('good day!')
}

//Calling Functions
greet();
speak();

/*Functions allow us to define a block of code and use it whenever we want. It
can be seen as a bot than can be called whenever. There is not much difference between a
function declaration and expression. 

The only difference is in what is known as 'hoisting' in JS. Hoisting loosely describes how 
declarations are  hoisted to the top of the file before the rest of the JavaScript is ran. Function
declarations are hosted but function expressions are not.

This means you can call a function declaration before it is defined. That cannot be done
when you use an expression. Good coding practice needs logical flow to your code. Stick to expressions
so others can read your definition before it is called.
*/