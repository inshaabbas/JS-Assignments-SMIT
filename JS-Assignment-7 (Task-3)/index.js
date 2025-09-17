var secretNumber = 0;
var maxNumber = 10;
var attempts = 0;
var maxAttempts = 5;

function setLevel(level) {
  if (level === 'easy') {
    maxNumber = 10;
    maxAttempts = 5;
  } else if (level === 'medium') {
    maxNumber = 50;
    maxAttempts = 7;
  } else if (level === 'hard') {
    maxNumber = 100;
    maxAttempts = 10;
  }

  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  attempts = 0;

  document.getElementById("level-select").style.display = "none";
  document.getElementById("game-box").style.display = "block";

  document.getElementById("range-info").textContent = "Guess a number between 1 and " + maxNumber;
  document.getElementById("feedback").textContent = "";
  document.getElementById("playAgainBtn").style.display = "none";
}

function checkGuess() {
  var guess = parseInt(document.getElementById("userGuess").value);

  if (isNaN(guess) || guess < 1 || guess > maxNumber) {
  document.getElementById("feedback").textContent = "⚠️ Please enter a number between 1 and " + maxNumber;
  return;
}


  attempts++;

  if (guess === secretNumber) {
    document.getElementById("feedback").textContent = "🎉 Correct! You guessed it in " + attempts + " attempts.";
    endGame(); 
  } else if (guess < secretNumber) {
    document.getElementById("feedback").textContent = "Too low! Try again. (Attempts: " + attempts + ")";
  } else {
    document.getElementById("feedback").textContent = "Too high! Try again. (Attempts: " + attempts + ")";
  }
}

function endGame() {
  document.getElementById("playAgainBtn").style.display = "inline-block";
}

function resetGame() {
  document.getElementById("userGuess").value = "";
  document.getElementById("level-select").style.display = "block";
  document.getElementById("game-box").style.display = "none";
}

function exitGame() {
  document.getElementById("userGuess").value = "";
  document.getElementById("level-select").style.display = "block"; 
  document.getElementById("game-box").style.display = "none";     
  document.getElementById("feedback").textContent = "";
}

