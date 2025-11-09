
console.log("Hello World")

function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random()*3);
    console.log(ComputerChoice)
        if (ComputerChoice===0) {
            return "rock"
        } else if (ComputerChoice===1) {
            return "paper"
        } else {
            return "scissors"
        }
}
console.log(getComputerChoice())

function getHumanChoice() {
    let HumanChoice = prompt("Rock, paper or scissors? Which one do you pick?");
    return HumanChoice
}

console.log(getHumanChoice())

let HumanScore = 0;
let ComputerScore = 0;