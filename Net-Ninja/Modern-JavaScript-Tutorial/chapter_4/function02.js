//ARGUMENTS & PARAMETERS
const speak = function(name='luigi', time='night') {
    console.log(`good ${time} ${name}`);
};

speak('Mario', 'morning');
speak(); //Will print out the default values we gave applied in func definition
speak('rafael');


/*Let's say we want to pass values into functions so we can do something 
with that value. In this case we pass a 'name' value to the speak function and
output the name in the console. The argument value is then created as a local
variable to be used in the code block of the function. This means you must pass 
an argument value every time you call the function.

When we pass in a value upon calling a function, that is known as an argument. 
A function parameter is known as the value passed into the function upon
declaration.*/