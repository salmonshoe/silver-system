// common string methods
let email = 'mario@thenetninja.co.uk';

/*This lastIndexOf method finds the last index of a particular character in the string.*/
let result = email.lastIndexOf('n') 
    console.log(result);
/*This slice method essentially slices a section from the string. 
Must pass in two arguments. The first one is where you want to slice from, 
the second one is where you want to slice to. Positions are by index and include the index for the results.*/
    const check = email.slice(6, 20);
    console.log(check);

/*This substring method is like slice but the second argument is how many characters you want to from. It gets 
how many character on top of the argument from the left */
let resulto = email.substr(6,14);
    console.log(resulto);

/*This replace method just replaces a character within a string with a another character. It takes two arguments,
finds the first character and replaces it with the second argument. Only replaces the first chracter from first agument it comes to.*/
let outcome = email.replace('@', '%');
    console.log(outcome);
