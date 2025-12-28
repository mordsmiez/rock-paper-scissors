

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
        if (randomNumber===0) {
            return "rock"
        } else if (randomNumber===1) {
            return "paper"
        } else {
            return "scissors"
        }
}

let HumanScore = 0;
let ComputerScore = 0;
const body = document.querySelector("body");

function playRound(humanChoice, computerChoice) {
    const roundText = document.createElement("p");

    if (ComputerScore < 5 && HumanScore < 5) {
        if (humanChoice.toLowerCase()===computerChoice) {
            roundText.textContent = "It's a tie! You chose " + humanChoice.toLowerCase() + ". The computer chose " + computerChoice + ". Computer has " + ComputerScore + " points. You have " + HumanScore + " points."
            body.appendChild(roundText);
        }
        else if (humanChoice.toLowerCase()==="scissors" && computerChoice==="paper" 
            || humanChoice.toLowerCase()==="rock" && computerChoice==="scissors" 
            || humanChoice.toLowerCase()==="paper" && computerChoice==="rock") {
                HumanScore++
                roundText.textContent = "You win this round! You chose " + humanChoice.toLowerCase() + 
                ". The computer chose " + computerChoice + ". Computer has " + ComputerScore + " points. You have " + HumanScore + " points."
                body.appendChild(roundText);
        }
        else if (humanChoice.toLowerCase()==="paper" && computerChoice==="scissors" || humanChoice.toLowerCase()==="scissors" && computerChoice==="rock" || humanChoice.toLowerCase()==="rock" && computerChoice==="paper") {
            ComputerScore++
            roundText.textContent = "You lose this round! You chose " + humanChoice.toLowerCase() + ". The computer chose " + computerChoice + ". Computer has " + ComputerScore + " points. You have " + HumanScore + " points."
            body.appendChild(roundText);
    }
    }
    else if (ComputerScore == 5) {
        roundText.textContent = "You lost the game! The computer was the first to reach " + ComputerScore + " points. You got " + HumanScore + " points."
        body.appendChild(roundText);
        body.removeChild(rock);
        body.removeChild(paper);
        body.removeChild(scissors);
    }

    else if (HumanScore == 5) {
        roundText.textContent = "You won the game! You were the first to reach " + HumanScore + " points. The computer got " + ComputerScore + " points."
        body.appendChild(roundText);
        body.removeChild(rock);
        body.removeChild(paper);
        body.removeChild(scissors);
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (event) => {
    event.preventDefault();
    let humanSelection = "rock";
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection,computerSelection));
    
    
});
paper.addEventListener("click", (event) => {
    event.preventDefault();
    let humanSelection = "paper"
    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
});
scissors.addEventListener("click", (event) => {
    event.preventDefault();
    let humanSelection = "scissors"
    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
});

