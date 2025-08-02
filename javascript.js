let humanScore=0;
let computerScore=0;

const result=document.createElement("div")
const current=document.createElement("div");
    
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
    if(HumanChoice=="scissors")
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
    
    document.addEventListener('DOMContentLoaded',()=>
    {
    const btn=document.querySelectorAll("button")
    btn.forEach((bt)=>
    {
    bt.onclick=()=>{ 
    const HumanChoice=bt.textContent;
    const ComputerChoice =getComputerChoice();
    current.textContent=`You Chose ${HumanChoice}, Computer Chose ${ComputerChoice} `
    bt.addEventListener("click",playRound(HumanChoice,ComputerChoice));  
    document.body.appendChild(result) ;
    document.body.appendChild(current);
    if(humanScore>=5)
    {
        alert("You Win")
        humanScore=0;
        computerScore=0;
    }
    else if(computerScore>=5)
    {    
        alert("You Lose")
        humanScore=0;
        computerScore=0;
    }
    }
});
});




