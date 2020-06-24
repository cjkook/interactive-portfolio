let playerChoice;
let compChoice;
let playerWins = 0;
let compWins = 0;
let ties = 0;

let choices = ["r","p","s"]

for(let i = 0; i <=1; i++) {
    // computer roll 
    compChoice = Math.floor(Math.random()*3)
    // console.log(choices[compChoice])
    
    // prompt player for choice
    playerChoice = prompt('r/p/s');
    for(let n = 0; n <= choices.length; n++) {
        if (playerChoice === choices[n]) {
            playerChoice = n;
        }
    }

    // compare 
    if(playerChoice < compChoice) {
        alert("Lose.")
        compWins++
    } else if (playerChoice === compChoice){
        alert("Tie.")
        ties++
    } else if (playerChoice===0 && compChoice===2) {
        alert("Win.")
        playerWins++
    } else if (playerChoice===2 && compChoice===0) {
        alert("Lose.")
        compWins++
    } else {
        alert("Win.")
        playerWins++
    }
}

// display results 
alert(`Wins: ${playerWins}
Losses: ${compWins}
Ties: ${ties}`)
