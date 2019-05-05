let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);

// ninjas[1] = 'ken';
// console.log(ninjas);
//This is how we can overwrite data within an array

console.log(ninjas.length); //Counts how many elements are inside the array

//==== ARRAY METHODS
let result = ninjas.join('/'); 
console.log(result);
    /*The join method takes an array and joins all the eleemts inside them into a single string.
    Use the parameter on what will join in between the elements.*/

let result02 = ninjas.indexOf('chun-li');
console.log(result02);
    /* indexOf method will bring the index of the value declared inside the method's argument. 
    Similar to the indexOf method for strings */

let result03 = ninjas.concat(['big boi', 'crystal']);
console.log(result03);
/* Concat method takes the array and conctenates another array with it.
Basically joining the current array with another array implemented from the method argument.*/

let results05 = ninjas.push('drake');
console.log(results05);
console.log(ninjas);
/*The push method just pushes in a new value to the array it is used on.
Unlike the concat method, the push method alters the original value of the array. This is what
we call a destructive method.*/

results05 = ninjas.pop()
console.log(ninjas);
/*The pop method is also destructive. What it does is take off the end value from the array.*/
