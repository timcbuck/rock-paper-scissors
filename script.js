let humanScore = 0;
let computerScore = 0;
let round = 1;


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
        alert("It's a draw! The computer also chose " + computerChoice + ".");
    } else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice == "paper") {
                    // lose
                    alert("You lose! Rock is beaten by paper.");
                    updateScore("computer");
                } else {
                    // win
                    alert("You win! Rock beats scissors.");
                    updateScore("human");
                }
                break;
            case "paper":
                if (computerChoice == "scissors") {
                    // lose
                    alert("You lose! Paper is beaten by scissors.");
                    updateScore("computer");
                    break;
                } else {
                    // win
                    alert("You win! Paper beats rock.");
                    updateScore("human");
                }
                break;
            case "scissors":
                if (computerChoice == "rock") {
                    // lose
                    alert("You lose! Scissors is beaten by rock.");
                    updateScore("computer");
                } else {
                    // win
                    alert("You win! Scissors beats paper.");
                    updateScore("human");
                }
                break;
        }
    }
}


function game(humanChoice) {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
    finishGame();
    round += 1;
    console.log(round);
    let el = document.getElementById("roundNumber");
    el.textContent = "Round: " + round;
}


function updateScore(winner) {
    if (winner == "human") {
        humanScore += 1;
        let el = document.getElementById("humanScore");
        el.textContent = "Human score: " + humanScore;
    } else if (winner == "computer") {
        computerScore += 1;
        let el = document.getElementById("computerScore");
        el.textContent = "Computer score: " + computerScore;
    }
}

function checkWinner(humanScore, computerScore) {
    if (humanScore == computerScore) {
        return "draw";
    } else if (humanScore > computerScore) {
        return "win";
    } else {
        return "lose";
    }
}


function finishGame() {
    let result = checkWinner(humanScore, computerScore);
    if (round == 5) {
        if (result == "draw") {
            alert("That's the end of the game. It's a draw!");
        } else if (result == "win") {
            alert("Congratulations, you won the game!");
        } else {
            alert("Too bad! You lost the game!");
        }
        location.reload();
    }
    
}