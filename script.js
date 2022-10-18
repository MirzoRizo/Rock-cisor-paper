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

let comp_score = 0;
let player_score = 0;

function playRound() {
  const playerSelection = prompt("Start the game!").toLowerCase();
  const computerSelection = getComputerСhoise();
  if (computerSelection == playerSelection) {
    alert ("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    comp_score += 1;
    alert ("You Lose");
  } else {
    player_score += 1;
    alert ("You Win");
  }
}

function WhoWon() {
  if (comp_score == player_score) {
    alert ("Draw");
  } else if (comp_score > player_score) {
    alert (`You lose to computer ${comp_score} by ${player_score}`);
  } else if (comp_score < player_score) {
    alert (`You win computer ${player_score} by ${comp_score}`);
  }
}

function Game() {
  while (!(comp_score >= 5 || player_score >= 5)) {
    console.log(playRound());
  }
  console.log(WhoWon());
}

Game();
