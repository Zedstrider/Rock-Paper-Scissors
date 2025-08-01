let humanScore=0;
let computerScore=0;

const result=document.createElement("div")
    
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

function playRound(HumanChoice, ComputerChoice)
{
    let outcome;
    if(HumanChoice=="scissor")
    {
        if(ComputerChoice=="rock")
            outcome= "You Lose";
        else if(ComputerChoice=="paper")
            outcome= "You Win";
        else
            outcome= "Draw";
    }
    else if(HumanChoice=="paper")
    {
        if(ComputerChoice=="rock")
            outcome= "You Win";
        else if(ComputerChoice=="paper")
            outcome= "Draw";
        else
            outcome= "You Lose";
    }
    else
    {
        if(ComputerChoice=="rock")
            outcome= "Draw";
        else if(ComputerChoice=="paper")
            outcome= "You Lose";
        else
            outcome= "You Win";
    }
    switch(outcome)
    {
        case "You Win":
            humanScore++;
            break;
        case "You Lose":
            computerScore++;
            break;
    }
    result.textContent=`${outcome}, Your Score:${humanScore}, Computer Score:${computerScore}`;
}

function playGame()
{
    
    document.addEventListener('DOMContentLoaded',()=>
    {
    const btn=document.querySelectorAll("button")
    btn.forEach((bt)=>
    {
    bt.onclick=()=>{ let choice=bt.textContent;
    choice=choice.toLowerCase();
    const ComputerChoice =getComputerChoice();
    const HumanChoice= choice;
    console.log(`You Chose ${HumanChoice}`);
    console.log(`Computer Chose ${ComputerChoice}`);
    bt.addEventListener("click",playRound(HumanChoice,ComputerChoice));  
    document.body.appendChild(result) 
    if(humanScore>=5)
    {
        return "You Win";
    }
    else if(computerScore>=5)
        return"You Lose"; 
    }
});
});
}

let final= playGame();
alert(final);


