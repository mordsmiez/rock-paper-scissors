
Computer choice pseudo code:

Get random variable 0,1, or 2
For 0 return "rock", for 1 return "paper", for 2 return "scissors"

Human chioce pseudo code:

Prompt the player to enter a string
Store the string for later use

Score initialization

Both HumanScore and ComputerScore are 0 in the beginning

Single round pseudo code
Get Human choice
Get computer choice
convert human choice to lower case
Compare choices
If computer choice = human choice, return "It's a tie!"
If Human choice rock and computer choice scissor, or human choice paper and computer choice rock or human choice scissors and computer choice paper, return "You win this round!", increment HumanScore
If human choice rock and computer choice paper or human choice paper and computer choice scissors or human choice scissors and computer choice rock, return "You lose this round!", increment ComputerScore

Full game pseudo code
Loop single round function 5 times.
If player score > computer score, display win message, otherwise display lose message
Display message with the final score.