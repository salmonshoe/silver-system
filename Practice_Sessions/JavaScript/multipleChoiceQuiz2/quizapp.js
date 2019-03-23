var q = ["What is 1 + 1? <br /><br /", "What is 2 + 2? <br /><br /", "What is 3 + 3? <br /><br /", "What is 4 + 4? <br /><br /",];
//Here are the answer options as variables. Each option is embedded with button elements
//We put in an onclick name to classify what is right and what is wrong
var a1 = ["<button class=buttons002 onclick=q1c()>2</button>",
        "<button class=buttons002 onclick=q2i()>1</button>",
        "<button class=buttons002 onclick=q3i()>8</button>"];

var a2 = ["<button class=buttons002 onclick=q1i()>1</button>",
        "<button class=buttons002 onclick=q2i()>10</button>",
        "<button class=buttons002 onclick=q3i()>3</button>"];

var a3 = ["<button class=buttons002 onclick=q1i()>1</button>",
        "<button class=buttons002 onclick=q2c()>4</button>",
        "<button class=buttons002 onclick=q3i()>1</button>"];

var a4 = ["<button class=buttons002 onclick=q1i()>1</button>",
        "<button class=buttons002 onclick=q2i()>8</button>",
        "<button class=buttons002 onclick=q3c()>6</button>"];
//For the correct and incorrect answers. Ten corrects so you can add any messages to the specific result
var c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct"];
var i =["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

//For the question number, n++ bc you want it to increase
var n = 0;
n++;
//For the score
var s = 0;
s++;

//For the first function, it's begin001 bc that is what you named the button
//The inner.HTML is basically "getbuttonbyID".
function begin001() {
    //Used to hide the Begin button at start of game
    disappear001.innerHTML = "";
    //Used to hide the Begin message from the gameplay
    message001.innerHTML = "";
    //Tells the computer that on the ID "question001" area, you want to show the value of the array question
    question001.innerHTML = q[0];
    option001.innerHTML = a1[0];
    option002.innerHTML = a2[0];
    option003.innerHTML = a3[0];
    option004.innerHTML = a4[0];
    //Tells computer to find the ID with "number001" to place in the new question number value
    number001.innerHTML = n++;

}
//Add the function for correct answers
function q1c() {
    answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
    //Rewrite all the options so they can be hidden and disappear after User input 
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    //The next button is created and lead to a new question "new002"
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    //Because this function is for the correct answer, we have to create a new statement adding to the score
    score001.innerHTML = s++;
}
//Add the incorrect function
//q1i covers all incorrect answer options
function q1i() {
    answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    //new002 is the new function that will be run to create the second question
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";

}
function new002() {
    question001.innerHTML = q[1];
    option001.innerHTML = a1[1];
    option002.innerHTML = a2[1];
    option003.innerHTML = a3[1];
    option004.innerHTML = a4[1];
    //Want to hide the next button to hide as you move on to the next question
    next001.innerHTML = "";
    //Want the answer result to be hidden
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}
function q2c() {//Change the function name to the question result
    //Change the correct answer index
    answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    //Change the next button to your new question
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
    score001.innerHTML = s++;
}
function q2i() {//Change the function name to the question result
    //Change the incorrect answer index
    answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    //Change the next button to your new question
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";

}
function end001() {
    question001.innerHTML = "End of Quiz.";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    //We create a div element and give it the attribute (so it can be placed on the center)
    //We create a repeat001 to reset the game
    next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}
function repeat001() {
    //Which will take you back to the beginning of the 
    location.reload();
}

