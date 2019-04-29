// If statements
const age = 25;
if (age > 20) {
    console.log('You are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if (ninjas.length > 4) {
    console.log("that's a lot of ninjas!");
    //Doesn't log since the statement is false
}

//If, Else If, and Else Statements
//Logical Operators: || represents OR   && represents AND
const password = 'pass1234';
if (password.length >= 12 && password.includes('@')) {
    console.log('that password is very strong');
} else if ( password.length >= 8 || password.includes('a')){
    console.log('that password is long enough')
} else {
    console.log('weak password bro');
}

// logical NOT (!) By placing a exclamation mark before a false value, then JS will evaluate it to true
let user = false; //shows the user is not logged in

if(!user)//You switch user confition by flipping the value 
{
    console.log('You must be logged in to continue');
}
