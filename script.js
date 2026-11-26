
function getComputerChoice(){
    let random = Math.random()
    if (random <=0.33){
        return "Rock".toLowerCase()
    }else if(random >0.33 && random <=0.66){
        return "Scissors".toLowerCase()
    }else {
        return "Paper".toLowerCase()
    }
}




function getHumanChoice(answer){
    answer = prompt("Rock, Paper, or Scissors?")
    return answer.toLowerCase()
}



let humanScore = 0;
let computerScore =0;

//increment human or computer score based on winner of each round

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("tie")
     }else if (
     (humanChoice == "Rock" && computerChoice == "Scissors")||
     (humanChoice == "Paper" && computerChoice == "Rock")||
     (humanChoice == "Scissors" && computerChoice == "Paper")){
        console.log(humanScore+=1)
    }else {
        console.log(computerScore+=1)
    
     }
    }


function playGame(){
     
    for (let i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice())
        
    }
    if (humanScore > computerScore){
        console.log("Human Wins")
    }else if(humanScore==computerScore){
        console.log("It is a tie")
    }else{
        console.log("Computer Wins")
    }
}

    


playGame()
