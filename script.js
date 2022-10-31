let comp_score = 0;
let player_score = 0;
const buttons = document.querySelectorAll('input')

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

function getComputerСhoise() {
  const rand_num = Math.floor(Math.random() * 3) + 1;
  let rps = "";
  if (rand_num === 1) {
    rps = "rock";
  } else if (rand_num === 2) {
    rps = "paper";
  } else if (rand_num === 3) {
    rps = "scissors";
  }
  return rps;
}

function playRound(choose) {
  const playerSelection = choose;
  const computerSelection = getComputerСhoise();
  let result = "";

  if (computerSelection == playerSelection) {
    result =
      "It's a tie. You both chose " +
      playerSelection +
      "<br><br>Player score: " +
      player_score +
      "<br>Computer score: " +
      comp_score;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    comp_score += 1;
    result =
      "You lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      "<br><br>Player score: " +
      player_score +
      "<br>Computer score: " +
      comp_score;
    if (comp_score == 5) {
      result += "<br><br>I won the game! Reload the page to play again";
      disableButtons();
    }
  } else {
    player_score += 1;
    result =
      "You win! " +
      playerSelection +
      " beats " +
      computerSelection +
      "<br><br>Player score: " +
      player_score +
      "<br>Computer score: " +
      comp_score;

    if (player_score == 5) {
      result += "<br><br>You won the game! Reload the page to play again";
      disableButtons();
    }
  }

  document.getElementById("result").innerHTML = result;
  return;
}

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
  playRound("rock");
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
  playRound("scissors");
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
  playRound("paper");
});
