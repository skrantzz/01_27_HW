var highscores = $("#highscores");
var questionContainer = $("#question-container");
var startButton = $("#start-btn");
var nextButton = $("#next-btn");
var timer = $("#countdown");
var timeGauge = $("#timeGauge");
var progress = $("#progress");
var scoreContainer = $("#scoreContainer");

var questions = [
  {
    question: "What is Javascript?",
    answers: [
      "A client-side scripting language",
      "A server-side scripting language that is understood by web browsers",
      "A & B"
    ],
    correctAnswer: 2
  }
  //   {
  //     question: "Which one is NOT a JavaScript data type?",
  //     answers: ["Number", "Sentence", "Undefined"],
  //     correctAnswer: 1
  //   },
  //   {
  //     question: "Which company developed JavaScript",
  //     answers: ["Netgear", "Netscape", "Napster"],
  //     correctAnswer: 1
  //   },
  //   {
  //     question: "What is 'this' keyword?",
  //     answers: [
  //       "A keyword referring to the object from where it was called",
  //       "The opposite of 'that'",
  //       "A keyword referring to the function from where it was called "
  //     ],
  //     correctAnswer: 0
  //   },
  //   {
  //     question: "Which symbol is used to comment something?",
  //     answers: ["//", "/* */", "A & B"],
  //     correctAnswer: 2
  //   },
  //   {
  //     question: "Which is NOT type of pop up box in JavaScript?",
  //     answers: ["Alert", "Prompt", "Message"],
  //     correctAnswer: 2
  //   },
  //   {
  //     question: "What are JavaScript Cookies?",
  //     answers: [
  //       "Chocolate Chip",
  //       "The small test files stored in a computer which gets created when the user visits a website to store information they need",
  //       "Oreos"
  //     ],
  //     correctAnswer: 1
  //   },
  //   {
  //     question: "Why is Sydney so great?",
  //     answers: ["She's cool", "She's pretty", "A & B"],
  //     correctAnswer: 2
  //   }
];

// amount of time per question
var timeLeft = 15 * questions.length;

//hide start page when start button is clicked
$("#start-btn").click(function() {
  $("#opener").hide();
  renderQuestion(questions[quizIndex]);
  //timer
  var timerInterval = setInterval(function() {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      location.reload();
    }
    timer.text("Time Left: " + timeLeft);
  }, 1000);
});

var quizIndex = 0;

function renderQuestion(questionArgument) {
  var questionElement = document.createElement("div");
  questionElement.classList.add("newClass");
  questionElement.innerHTML = questionArgument.question;
  questionContainer.append(questionElement);

  for (var i = 0; i < questionArgument.answers.length; i++) {
    var createButton = document.createElement("button");
    createButton.classList.add("newClass");
    createButton.textContent = questionArgument.answers[i];
    questionContainer.append(createButton);

    if (i === questionArgument.correctAnswer) {
      createButton.onclick = function() {
        quizIndex++;
        $(".newClass").replaceWith(questions[quizIndex]);

        // once we hit the last question, will go to highscore page
        if (quizIndex === questions.length) {
          window.location.href = "highscore.html";
          //saving to local storage
          localStorage.setItem("mostRecentScore", timeLeft);
        }
        // renders the next question
        renderQuestion(questions[quizIndex]);
      };
    } else {
      createButton.onclick = function() {
        timeLeft -= 5;
        alert("Wrong! You lost 5 seconds");
      };
    }
  }
}

// function clearHighscore() {}

// function renderHighscore() {}

// // save to local
// function saveScore(input) {
//   var key = "input-" + input.id;
//   var storedValue = localStorage.getItem(key);
// }
