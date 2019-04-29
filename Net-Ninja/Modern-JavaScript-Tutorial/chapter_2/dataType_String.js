let age = 25;
let year = 2019;

//console.log(age, year);

age = 30; // resets the variable value of age
            //Using "let age = 30" is not valid
//console.log(age);

var score = 75; // var was the older way to create variables
//console.log(score);

//===================== DATA TYPES =============

//strings
console.log('hello, world');

 let email = 'mario@thenetninja.co.ok';
 console.log(email);

 //string concatenaton
 let firstName = 'Brandon';
 let lastName = 'Sanderson';

 let fullName= firstName + ' ' +lastName;
 console.log(fullName);

 //getting characters
 console.log(fullName[0]); //you use the index of JavaScript to capture a character position
 console.log(fullName[2]);

 //string length (how many characters are inside the string?)
 console.log(fullName.length); //The space is counted due to your concatenation!
    //Properties are summoned using a dot followed by the method name.

 //string methods (functions and methods are used interchangebly)
    //Functions are snippets of code performing specific tasks. Methods are functions associated with a particular object or data type.
console.log(fullName.toUpperCase())
    //toUpperCase is a string method.

let result = fullName.toLowerCase(); // we are just storing a method value into a variable
console.log(result , fullName);

/*The past two method do not alter the original variable. But ther are some methods that do alter 
the original value of the original variable.*/
    let index = email.indexOf('@') //A method that finds the index of a certain character from the string
console.log(index);