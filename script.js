let humanScore, computerScore = 0;


function getComputerChoice() {
    let a = Math.random();
    if (a < 0.33) {
        return "rock";
    } else if (a >= 0.33 && a < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        // draw
        console.log("draw");
    } else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice == "paper") {
                    // lose
                    console.log("lose");
                } else {
                    // win
                    console.log("win");
                }
                break;
            case "paper":
                if (computerChoice == "scissors") {
                    // lose
                    console.log("lose");
                    break;
                } else {
                    // win
                    console.log("win");
                }
                break;
            case "scissors":
                if (computerChoice == "rock") {
                    // lose
                    console.log("lose");
                } else {
                    // win
                    console.log("win");
                }
                break;
        }
    }
}


function game(humanChoice) {
    let computerChoice = getComputerChoice();
    console.log("Human choice: ", humanChoice);
    console.log("Computer choice: ", computerChoice);
    playRound(humanChoice, computerChoice);
}