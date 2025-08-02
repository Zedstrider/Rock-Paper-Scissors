let humanScore = 0;
let computerScore = 0;

const result = document.createElement("div");
const current = document.createElement("div");

// Append result and current status once
document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(current);
    document.body.appendChild(result);

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanChoice = button.textContent;
            const computerChoice = getComputerChoice();

            current.textContent = `You Chose ${humanChoice}, Computer Chose ${computerChoice}`;
            playRound(humanChoice, computerChoice);

            if (humanScore >= 5 || computerScore >= 5) {
                alert(humanScore >= 5 ? "You Win!" : "Computer Wins!");
                humanScore = 0;
                computerScore = 0;
                result.textContent = `Game Reset. Your Score: 0, Computer Score: 0`;
            }
        });
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playRound(human, computer) {
    let outcome = "";

    if (human === computer) {
        outcome = "Draw";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        outcome = "You Win";
        humanScore++;
    } else {
        outcome = "You Lose";
        computerScore++;
    }

    result.textContent = `${outcome}. Your Score: ${humanScore}, Computer Score: ${computerScore}`;
}



