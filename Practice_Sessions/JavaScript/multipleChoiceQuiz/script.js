
//Create an array of multiple choice question objects. Each represents a question.
var questions = [
    {
        prompt: "What is my first name?\n(a) Rafael\n(b) Eddy\n(c) Dave",
        answer: "a"
    },
    {
        prompt: "What is my last name?\n(a) Cruze \n(b) Reynoso\n(c) Sanchez",
        answer: "b"
    },
    {
        prompt:"How are you feeling today?\n(a) Sad\n(b) Happy\n (c) Motivated",
        answer: "c"
    },
];
//Create a variable determining how correct a User is
var score = 0;

//Then run a program running through each array, asking the question and determining User correctness
//Loop through all questions within each array. Ask question, check with response, and respond with the score
for(var i = 0; i < questions.length; i++) {
    var userResponse = window.prompt(questions[i].prompt);
    if (userResponse == questions[i].answer) {
        score++;
        console.log("Correct");
    } else {
        console.log("Wrong!");
    }
}
console.log("You got " + score + "/" + questions.length + " correct.");
