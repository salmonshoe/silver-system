// Booleans & comparisons
console.log(true, false, 'true', 'false'); //truthy and falsey values are different from returning strings

// Methods can return booleans
let email = 'luigi@netninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let result = email.includes('@');
let doesIt = email.includes('9');
    console.log(result, doesIt);
    /* The includes method can be used on a string to check if a certain character exists within a string. 
    If it does, true is returned. If not, then false is returned. */

let who = names.includes('luigi');
    console.log(who);
    /*You can use the includes boolean method for arrays as well. Not just pass characters but also strings within an object. */

// Comparison Operators
let age = 25;

console.log(age == 25); //Check if both values are the same value. Should return true.
console.log(age == 30); //Should return false
console.log(age != 30); //The exclamation point, the flag, states it as not equal. Should return true
console.log(age > 20); //Another comparison operator. Should return true
console.log(age <= 25); //Another comparison operator. Should return true

let name = 'shaun';
    console.log(name == 'shaun'); //True. The same string values
    console.log(name == 'Shaun'); //False. Not the same values bc one letter is uppercase
    console.log(name > 'crystal'); //True. This boolean bases string comparisons off of the first letter of the string and where it falls on the alphabet. The later the letter, the greater its value.
    console.log(name > 'Shaun'); //In JavaScript, lowercase letters are greater than any uppercase letters (first letter of string).

//Loose Comparisons (different types can still be equal)
    console.log(age == 25); //True
    console.log(age == '25'); //True
    console.log(age != 25); //False
    console.log(age != '25'); //False. Behind the scenes the string is still evaluated as a number.

//Stricy Comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === '25'); //False bc a number cannot be equal to a string
console.log(age !== 25); //False
console.log(age !== '25'); //True