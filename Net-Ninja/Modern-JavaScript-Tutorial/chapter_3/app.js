// For loops
    // for (let i = 0; i < 5; i++) {
    //     console.log('in loop:', i);
    // }
    // console.log('loop finished');

     const names = ['shaun', 'mario', 'luigi']; //Imagine you don't know how many names are in the array
    // for (let i = 0; i < names.length; i++) {
    //     console.log(i);
    //     console.log(names[i]); //To log the value of what is looped through
    // }

// While loops
let i = 0; //Typically declared outside of the loop
while (i < 5) {
    console.log('in loop: ', i);
    i++; //If this adder is not put in the code block then you will be caught in an infinite loop
}

let j = 0;
while (j < names.length) {
    console.log(names[j]);
    j++;
}

//Do While Loop
let k =  4;

do {
    console.log('val of k is: ', k);
    k++;
} while(k < 5);