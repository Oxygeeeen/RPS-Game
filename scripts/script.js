const choices = ["rock", "paper", "scissors"];
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "won";
  } else {
    return "lost";
  }
}

function game(title) {
  let playerScore = 0;
  let computerScore = 0;
  let message = title || "";

  for (let i = 0; i < 5; i++) {
    let playerSelection;

    while (true) {
      playerSelection = prompt(
        `${message}Round ${i + 1} : Rock, Paper or Scissors?`
      );
      if (playerSelection === null) {
        alert(
          "You canceled the game. AI remains undefeated. Refresh to try again !"
        );
        return;
      }
      playerSelection = playerSelection.trim().toLowerCase();

      if (choices.includes(playerSelection)) {
        message = "";
        break;
      } else {
        message = "Invalid input! \n";
      }
    }

    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === "won") {
      console.log(`You won round ${i + 1}`);
      playerScore++;
    } else if (roundResult === "lost") {
      console.log(`You lost round ${i + 1}`);
      computerScore++;
    } else {
      console.log(`Round ${i + 1} was a tie`);
    }
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You won!  You defeated the evil AI!")
    alert("Congratulations! You won!  You defeated the evil AI!");
  } else if (playerScore < computerScore) {
    console.log("The AI dominated you! Don't give up! You can always try again!")
    alert("The AI dominated you! Don't give up! You can always try again!");
  } else {
    console.log("It's a tie! The AI is still lurking around! Don't give up! Try again!")
    alert(
      "It's a tie! The AI is still lurking around! Don't give up! Try again!"
    );
  }
}

game("Defeat the AI \n");
