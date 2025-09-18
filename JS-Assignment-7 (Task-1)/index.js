var questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Lasagna", "Hyper Trainer Marking Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Sun Microsystems", "Netscape", "Google"],
    answer: "Netscape"
  },
  {
    question: "Which HTML tag is used to link JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<link>"],
    answer: "<script>"
  },
  {
    question: "Inside which HTML element do we put CSS?",
    options: ["<style>", "<css>", "<script>", "<design>"],
    answer: "<style>"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "<!-- -->", "#"],
    answer: "//"
  },
  {
    question: "Which of these is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Method", "Display Object Management", "Desktop Oriented Mode"],
    answer: "Document Object Model"
  }
];

var currentIndex = 0;
var score = 0;

function showQuestion() {
  var current = questions[currentIndex];

  document.getElementById("question").textContent = current.question;

  var optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  // disable Next until user selects
  var nextBtn = document.querySelector("#nextBtn");
  nextBtn.disabled = true;
  nextBtn.style.opacity = "0.6";
  nextBtn.style.cursor = "not-allowed";

  for (var i = 0; i < current.options.length; i++) {
    var li = document.createElement("li");
    li.textContent = current.options[i];
    li.setAttribute("onclick", "selectOption(this)");
    optionsList.appendChild(li);
  }
}

function selectOption(optionEl) {
  var selected = optionEl.textContent;
  var correct = questions[currentIndex].answer;

  if (selected === correct) {
    score++;
    optionEl.style.backgroundColor = "#c8e6c9";
  } else {
    optionEl.style.backgroundColor = "#ffcdd2";
  }

  disableOptions();

  // enable Next button
  var nextBtn = document.querySelector("#nextBtn");
  nextBtn.disabled = false;
  nextBtn.style.opacity = "1";
  nextBtn.style.cursor = "pointer";
}

function disableOptions() {
  var options = document.getElementById("options").children;
  for (var i = 0; i < options.length; i++) {
    options[i].onclick = null;
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";
  document.getElementById("score").textContent = score + " / " + questions.length;

  var remark = "";
  if (score === questions.length) {
    remark = "🎉 Excellent! You nailed it!";
  } else if (score >= questions.length * 0.7) {
    remark = "👏 Great job! Just a little more practice.";
  } else if (score >= questions.length * 0.4) {
    remark = "🙂 Not bad, keep learning and you'll get there!";
  } else {
    remark = "😅 Don’t worry, practice makes perfect!";
  }

  document.getElementById("remark").textContent = remark;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  document.getElementById("result-box").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  showQuestion();
}

showQuestion();
