// ! Rock Paper Scissors - Console

// Function to randomly choose a move.
function computerPlay() {
  const playOptions = ["rock", "paper", "scissors"];
  return playOptions[Math.floor(Math.random() * playOptions.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return "Its a tie! Rock = Rock!";
      } else if (computerSelection === "scissors") {
        return "You won! Rock beats scissors!";
      } else if (computerSelection === "paper") {
        return "You lose! Paper beats Rock!";
      }
    case "paper":
      if (computerSelection === "paper") {
        return "Its a tie! Paper = Paper!";
      } else if (computerSelection === "rock") {
        return "You won! Paper beats rock!";
      } else if (computerSelection === "scissors") {
        return "You lose! Scissors beats Paper!";
      }
    case "scissors":
      if (computerSelection === "scissors") {
        return "Its a tie! Scissors = Scissors!";
      } else if (computerSelection === "paper") {
        return "You won! Scissors beats paper";
      } else if (computerSelection === "rock") {
        return "You lose! Rock beats scissors";
      }
  }
}

function game() {}
