

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


function getHumanChoice() {
    let humanPick = prompt("Rock, paper or scissors? Which one do you pick?");
    return humanPick
}


let HumanScore = 0;
let ComputerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase()===computerChoice) {
        return "It's a tie! You chose " + humanChoice.toLowerCase() + ". The computer chose " + computerChoice + "."
    }
    else if (humanChoice.toLowerCase()==="scissors" && computerChoice==="paper" || humanChoice.toLowerCase()==="rock" && computerChoice==="scissors" || humanChoice.toLowerCase()==="paper" && computerChoice==="rock") {
        HumanScore++
        return "You win this round! You chose " + humanChoice.toLowerCase() + ". The computer chose " + computerChoice + "."
    }
    else if (humanChoice.toLowerCase()==="paper" && computerChoice==="scissors" || humanChoice.toLowerCase()==="scissors" && computerChoice==="rock" || humanChoice.toLowerCase()==="rock" && computerChoice==="paper") {
        ComputerScore++
        return "You lose this round! You chose " + humanChoice.toLowerCase() + ". The computer chose " + computerChoice + "."
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

console.log(HumanScore)
console.log(ComputerScore)