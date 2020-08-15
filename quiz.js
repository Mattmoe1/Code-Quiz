//Quiz questions
var questions = [
    {
        title: "What type of pop up box will allow a user to give a response?",
        choices: ["input", "alert", "prompt", "confirm"],
        answer: "prompt"
    },
    {
        title: "Arrays in Javascript can be used to store _____.",
        choices: ["number of strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed with ____.",
        choices: ["parentheses", "square brackets", "curly brackets", "quotes"],
        answer: "parentheses"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },  
]

let timeLeft = 70
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");


// timer function
function countDown() {
    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -= 1
    }, 1000)
}