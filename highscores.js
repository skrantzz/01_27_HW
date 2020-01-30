// function saveHighscore() {
//   var printHighscore = document.createElement("div");
//   printHighscore.textContent = timeLeft;
//   console.log(timerInterval);
// }

// var highscoresList = document.getElementById("highscoresList");
// var highscores = JSON.parse(localStorage).getItem("highscores") || [];
// console.log(highscores);

var initials = document.getElementById("userInitials");
var submitBtn = document.getElementById("submitBtn");

initials.addEventListener("keyup", () => {
  submitBtn.disabled = !initials.value;
});

var finalScore = document.getElementById("finalScore");
// grabs score from local
var grabsRecentScore = localStorage.getItem("mostRecentScore");
finalScore.textContent = grabsRecentScore;

var saveHighscore = e => {
  e.preventDefault();
  var initialValue = initials.value;
  localStorage.setItem("initialValue", JSON.stringify(initialValue));
  var highscoreDiv = document.createElement("div");
  var renderScore = localStorage.getItem("initialValue");
  highscoreDiv.innerHTML = renderScore;
  questionContainer.append(highscoreDiv);
};
$("#userInitials").submit(saveHighscore);
