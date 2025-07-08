let humanScore=0;
let computerScore=0;

function getComputerChoice()
{
    const ans=Math.random()*3;
    if(ans<1)
        return "rock";
    else if(ans>2)
        return "paper";
    else 
        return "scissors";
}

function getHumanChoice()
{
    let choice = prompt("Enter Choice");
    choice=choice.toLowerCase();
    return choice;
}

function playRound(HumanChoice, ComputerChoice)
{
    if(HumanChoice=="scissors")
    {
        if(ComputerChoice=="rock")
            return "You Lose";
        else if(ComputerChoice=="paper")
            return "You Win";
        else
            return "Draw";
    }
    else if(HumanChoice=="paper")
    {
        if(ComputerChoice=="rock")
            return "You Win";
        else if(ComputerChoice=="paper")
            return "Draw";
        else
            return "You Lose";
    }
    else
    {
        if(ComputerChoice=="rock")
            return "Draw";
        else if(ComputerChoice=="paper")
            return "You Lose";
        else
            return "You Win";
    }
}

function playGame()
{
    for(let i=0;i<5;i++)
    {
        const ComputerChoice =getComputerChoice();
        const HumanChoice= getHumanChoice();
        console.log(HumanChoice);
        console.log(ComputerChoice);
        const result=playRound(HumanChoice,ComputerChoice);
        switch(result)
        {
            case "You Win":
                humanScore++;
                break;
            case "You Lose":
                computerScore++;
                break;
        }
        alert(`${result}, Your Score:${humanScore}, Computer Score:${computerScore}`);
    }
    if(humanScore>computerScore)
        alert("You Win");
    else if(humanScore<computerScore)
        alert("You Lose");
    else
        alert("Draw");
}

playGame();


