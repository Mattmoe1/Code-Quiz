function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is: </h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br>`;

    document.getElementById("quizGame").innerHTML = quizContent;
}
getScore();