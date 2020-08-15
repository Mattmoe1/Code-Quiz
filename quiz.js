// Starting var and const
let timeLeft = 70
const timeLeftDisplay = document.querySelector('#timer')
const startingEl = document.querySelector(".rowOne")
const questionElement = document.getElementById("question")
const questionContainer = document.querySelector(".question-container")
var currentQuestionIndex = 0
var questionTitle = document.getElementById('questionTitle')
var gameOver = document.querySelector('.rowThree')
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var button4 = document.getElementById('button4')
var results = document.querySelector('#results')
var score = 0;
var endScore = document.querySelector('#endScore');
var submitBtn = document.getElementById('submitBtn');

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('start-btn')

    const startButton = document.getElementById("start-btn");
// Quiz start
function startGame() {
    console.log('Start');
    console.log(startingEl);
    startingEl.style.display = "none";
    questionContainer.style.display = "block";
    setNextQuestion()
}
// Countdown
    startButton.addEventListener('click', function () {
        startGame();
        countDown();
     })
})
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
function setNextQuestion() {
    var question = questions[currentQuestionIndex]
    button1.textContent = question.choices[0]
    button2.textContent = question.choices[1]
    button3.textContent = question.choices[2]
    button4.textContent = question.choices[3]
    questionTitle.textContent = question.title
}
// event listeners for answers
button1.addEventListener('click', checkAnswer);
button2.addEventListener('click', checkAnswer);
button3.addEventListener('click', checkAnswer);
button4.addEventListener('click', checkAnswer);
//check to see answers
function checkAnswer(event) {
    var answer = questions[currentQuestionIndex].answer
    // feeback if answer is correct
    if (answer === event.target.innerHTML) {
        results.textContent = "Correct!";
        score++;
        clearResults(); 
    // feedback if answer is wrong
    } else{
        results.textContent = "Sorry that is not correct";
        clearResults(); 
        timeLeft-=15
    }
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        setNextQuestion()  
    }
    else{
        endGame();
    }
}
function endGame() {
    endScore.textContent = score; 
    questionContainer.style.display = "none";
    gameOver.style.display = "block"; 
}
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    setScore();
}) 
// stores in local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('exampleName').value);
    window.location.replace('highscore.html')
    }
// clears answer feedback 
function clearResults(){
    setTimeout(function(){
        results.textContent = "";
    },1000) 
}
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