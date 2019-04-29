// BREAK and CONTINUE
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    //What if a score of zero is not worth printing?
    if (scores[i] === 0) {
        continue; //Ignores the rest of the code within the code block. Restarts to the index after 0
    }

    console.log('your score: ', scores[i]);

    //Let's say the max score you can reach is 100. At that point you should break the loop since everything after is meaningless
    if (scores[i] === 100) {
        console.log('Congrats! You got the top score!');
        break; //This will stop the loop completely 
    }
}

// SWITCH statements
const grade = 'B';

//Using If statements can get tedious and untidy
// if (grade === 'A') {

// } else if (grade === 'B') {

// } else if (grade === 'C') {

// } else if (grade === 'D') {

// } else if (grade === 'F') {

// } else {

// }
switch (grade) {
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('You got a D!');
        break;
    case 'F':
        console.log('You got a F!');
        break;
    default:
        console.log('Not a valid score');
}
