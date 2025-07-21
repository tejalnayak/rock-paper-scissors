let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultMessage = document.querySelector(".result-message");

const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
const drawSound = document.getElementById("drawSound");

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  playerChoiceSpan.textContent = playerChoice;
  computerChoiceSpan.textContent = computerChoice;

  if (playerChoice === computerChoice) {
    resultMessage.textContent = "It's a Draw!";
    resultMessage.style.color = "#ffc107";
    drawSound.currentTime = 0;
    drawSound.play();
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage.textContent = "You Win!";
    resultMessage.style.color = "#00e676";
    playerScore++;
    winSound.currentTime = 0;
    winSound.play();
  } else {
    resultMessage.textContent = "You Lose!";
    resultMessage.style.color = "#ff1744";
    computerScore++;
    loseSound.currentTime = 0;
    loseSound.play();
  }

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpan.textContent = 0;
  computerScoreSpan.textContent = 0;
  playerChoiceSpan.textContent = "-";
  computerChoiceSpan.textContent = "-";
  resultMessage.textContent = "Make your move!";
  resultMessage.style.color = "#ffc107";
}
