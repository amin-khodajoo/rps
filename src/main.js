const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#resetBtn");

let player;
let computer;
let result;
let CS = 0;
let PS = 0;

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1: {
      computer = "✊";
      break;
    }
    case 2: {
      computer = "✋";
      break;
    }
    case 3: {
      computer = "✌️";
      break;
    }
  }
}
function checkWinner() {
  if (player === computer) {
    return "Draw!";
  } else if (computer === "✊") {
    return player === "✋" ? "You Win!" : "You Lose!";
  } else if (computer === "✋") {
    return player === "✌️" ? "You Win!" : "You Lose!";
  } else if (computer === "✌️") {
    return player === "✊" ? "You Win!" : "You Lose!";
  }
}
function Score() {
  if (resultText.textContent == "You Win!") {
    PS++;
    playerScore.textContent = `Player Score: ${PS}`;
    computerScore.textContent = `Computer Score: ${CS}`;
  } else if (resultText.textContent == "You Lose!") {
    CS++;
    playerScore.textContent = `Player Score: ${PS}`;
    computerScore.textContent = `Computer Score: ${CS}`;
  }
}

choiceBtn.forEach((item) => {
  item.addEventListener("click", () => {
    player = item.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    Score();
  });
});

resetBtn.addEventListener("click", () => {
  CS = 0;
  PS = 0;
  playerScore.textContent = `Player Score: 0`;
  computerScore.textContent = `Computer Score: 0`;
  playerText.textContent = `Player: ❓`;
  computerText.textContent = `Computer: ❓`;
  resultText.textContent = `Result`;
});
