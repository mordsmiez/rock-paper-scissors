

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



function playGame() {
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    console.log(playRound(humanSelection1, computerSelection1))

    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    console.log(playRound(humanSelection2, computerSelection2))

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    console.log(playRound(humanSelection3, computerSelection3))
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    console.log(playRound(humanSelection4, computerSelection4))
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    console.log(playRound(humanSelection5, computerSelection5))
    if (HumanScore > ComputerScore) {
        return "Congrats, you won the game! Your score: " + HumanScore 
    }

    else {
        return "Too bad, you lost the game! Computer score: " + ComputerScore
    }
}

console.log(playGame());

console.log(HumanScore)
console.log(ComputerScore)