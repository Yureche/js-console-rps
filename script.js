// ! Rock Paper Scissors - Console

// Function to randomly choose a move.
function computerPlay() {
  const playOptions = ["rock", "paper", "scissors"];
  return playOptions[Math.floor(Math.random() * playOptions.length)];
}

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        return "Its a tie! Rock = Rock!";
      } else if (computerSelection === "scissors") {
        playerWins += 1;
        return "You won! Rock beats scissors!";
      } else if (computerSelection === "paper") {
        computerWins += 1;
        return "You lose! Paper beats Rock!";
      }
    case "paper":
      if (computerSelection === "paper") {
        return "Its a tie! Paper = Paper!";
      } else if (computerSelection === "rock") {
        playerWins += 1;
        return "You won! Paper beats rock!";
      } else if (computerSelection === "scissors") {
        computerWins += 1;
        return "You lose! Scissors beats Paper!";
      }
    case "scissors":
      if (computerSelection === "scissors") {
        return "Its a tie! Scissors = Scissors!";
      } else if (computerSelection === "paper") {
        playerWins += 1;
        return "You won! Scissors beats paper";
      } else if (computerSelection === "rock") {
        computerWins += 1;
        return "You lose! Rock beats scissors";
      }
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(
      playRound(prompt("Enter: Rock, Paper, Scissors: "), computerPlay()),
      `\nPlayer wins: ${playerWins} \nComputer wins: ${computerWins}`
    );
  }

  playerWins > computerWins
    ? console.log("You won! :)")
    : console.log("You lost! :(");
}
