function computerPlay() {
  const playOptions = ["rock", "paper", "scissors"];
  return playOptions[Math.floor(Math.random() * playOptions.length)];
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
rock.onclick = function() {
  playRound("rock")
}
paper.onclick = function() {
  playRound("paper");
}
scissors.onclick = function() {
  playRound("scissors");
}

let userScore = document.getElementById('user-score');
let compScore = document.getElementById('computer-score');
let playerWins = 0;
let compWins = 0;
const resultMessage = document.getElementById("result");
const winnerMessage = document.getElementById("winner-message");

// This function plays one round of the game
function playRound(playerSelection) {
  computerSelection = computerPlay();
  if (playerSelection==='rock') {
    if (computerSelection==='rock'){
      resultMessage.textContent = "Its a tie! Rock = Rock"
    }
    else if (computerSelection ==='scissors') {
      resultMessage.textContent = "You won! Rock beats Scissors";
      userScore.textContent = playerWins +=1;
    }
    else{
      resultMessage.textContent = "You lose! Paper beats Rock" 
      compScore.textContent = compWins +=1;
    }
  }
  else if(playerSelection==='paper') {
    if (computerSelection==='paper'){
      resultMessage.textContent = "Its a tie! Paper = Paper"
    }
    else if (computerSelection ==='rock') {
      resultMessage.textContent = "You won! Paper beats Rock";
      userScore.textContent = playerWins +=1;
    }
    else{
      resultMessage.textContent = "You lose! Scissors beats Paper" 
      compScore.textContent = compWins +=1;
    }
  }
  else {
    if (computerSelection==='scissors'){
      resultMessage.textContent = "Its a tie! Scissors = Scissors"
    }
    else if (computerSelection ==='paper') {
      resultMessage.textContent = "You won! Scissors beats Paper";
      userScore.textContent = playerWins +=1;
    }
    else{
      resultMessage.textContent = "You lose! Rock beats scissors" 
      compScore.textContent = compWins +=1;
    }
  }
  if (playerWins >= 5){
    winnerMessage.textContent = `You won!`
    playerWins = 0;
    userScore.textContent = playerWins;
    compWins = 0;
    compScore.textContent = compWins;
    resultMessage.textContent = " "
  }
  else if (compWins >= 5) {
    winnerMessage.textContent = "Computer won!"
    compWins = 0;
    compScore.textContent = compWins;
    playerWins = 0;
    userScore.textContent = playerWins;
    resultMessage.textContent = " "
  }
}
