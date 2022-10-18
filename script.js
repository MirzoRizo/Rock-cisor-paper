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

const playerSelection = prompt("Start the game!").toLowerCase();
const computerSelection = getComputerСhoise();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    return "Tie game!";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    return "You Lose";
  } else {
    return "You Win";
  }
}
console.log(playRound(playerSelection, computerSelection));
