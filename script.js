/* 
GitHub Copilot Prompts Used:

- Get all required DOM elements like buttons, scores, result text
- Add click event listeners to each choice button
- Function to generate random computer choice: rock, paper, or scissors
- Function to compare player and computer choice and return winner
- Function to update scores and round number
- Function to show feedback/result message after each round
- Function to end the game after 5 rounds and show final result
- Function to reset all variables and UI when Play Again is clicked
- Hide choice buttons and show Play Again when game ends
*/

let playerScore = 0;
let computerScore = 0;
let round = 0;

const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const roundEl = document.getElementById('round');
const playAgainBtn = document.getElementById('play-again');

choices.forEach(btn => {
  btn.addEventListener('click', () => {
    if (round >= 5) return;

    const playerChoice = btn.dataset.choice;
    const computerChoice = getComputerChoice();
    const outcome = getWinner(playerChoice, computerChoice);

    updateScore(outcome);
    showResult(playerChoice, computerChoice, outcome);

    round++;
    roundEl.textContent = round;

    if (round === 5) endGame();
  });
});

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
}

function getWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function updateScore(winner) {
  if (winner === 'player') {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (winner === 'computer') {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }
}

function showResult(player, computer, winner) {
  if (winner === 'draw') {
    result.textContent = `It's a draw! You both chose ${player}.`;
  } else if (winner === 'player') {
    result.textContent = `You Win! ${player} beats ${computer}.`;
  } else {
    result.textContent = `You Lose! ${computer} beats ${player}.`;
  }
}

function endGame() {
  let message = '';
  if (playerScore > computerScore) {
    message = "🎉 Congratulations! You Won The Game!";
  } else if (computerScore > playerScore) {
    message = "💻 Game Over! Computer Wins!";
  } else {
    message = "🤝 It's a Tie! Try Again!";
  }
  result.textContent += `\n${message}`;
  playAgainBtn.style.display = 'inline-block';
}

playAgainBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  roundEl.textContent = 0;
  result.textContent = '';
  playAgainBtn.style.display = 'none';
});
