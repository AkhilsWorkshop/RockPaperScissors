const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    
    switch(randomNumber) {
        case 0:
            computerChoice = "rock"
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors"
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {

    if (computerChoice === userChoice){
        result = "Draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "Won!"
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "Lost!"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "Lost!"
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "Won!"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "Lost!"
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "Won!"
    }
    
    
    resultDisplay.innerHTML = result
}