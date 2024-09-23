let rulesBtn = document.getElementById("rules-button");
let closeBtn = document.getElementById("close-button");
let popup = document.getElementById("popup-container");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let playerChoiceImg = document.getElementById("user-choice-img");
let computerChoiceImg = document.getElementById("computer-choice-img");
let userChoiceImg = document.getElementById("user-choice-img");
const choicesArray = ["rock", "paper", "scissors"];
let resultMessage = document.getElementById("result-text");
let playAgainBtn = document.getElementById("play-again");
let playAgainBtn2 = document.getElementById("play-again-2");
let againstPcMessage = document.getElementById("against-pc");
let resultBox = document.getElementById("result-container");
let mainGameContainer = document.getElementById("container-2");
let gameWrapper = document.getElementById("wrapper-div-2");
let nextButton = document.getElementById('next-button');
let rulesToggleBtn = document.getElementById('rules-button');
let rippleEffect1 = document.getElementById("circle-container-1");
let rippleEffect2 = document.getElementById("circle-container-2");
let playerScore = localStorage.getItem('playerScore') ? parseInt(localStorage.getItem('playerScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

document.getElementById('computer-score').innerHTML = computerScore;
document.getElementById('your-score').innerHTML = playerScore;

rulesBtn.addEventListener('click', () => {
    popup.style.display = "block";
});
closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
});
nextButton.addEventListener('click', () => {
    window.location.href = "hurray.html";
});

function getComputerChoice() {
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}

playAgainBtn.addEventListener('click', function() {
    mainGameContainer.style.display = "block";
    gameWrapper.style.display = "none";
    nextButton.style.display = 'none';
    rulesToggleBtn.style.right = '20px'; 
});

function determineWinner(playerChoice, computerChoice) {
    rippleEffect1.classList.remove('ripple-effect');
    rippleEffect2.classList.remove('ripple-effect');

    if (playerChoice === computerChoice) {
        resultMessage.innerHTML = "TIE UP";
        againstPcMessage.innerHTML = "";
        return "Draw";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        againstPcMessage.innerHTML = "AGAINST PC";
        playerScore++;
        localStorage.setItem('playerScore', playerScore);
        document.getElementById('your-score').innerHTML = playerScore;
        resultMessage.innerHTML = "YOU WIN";
        rippleEffect1.classList.add('ripple-effect');
        return "User's Win";
    } else {
        againstPcMessage.innerHTML = "AGAINST PC";
        computerScore++;
        localStorage.setItem('computerScore', computerScore);
        document.getElementById('computer-score').innerHTML = computerScore;
        resultMessage.innerHTML = "YOU LOST";
        rippleEffect2.classList.add('ripple-effect');
        return "Computer's Win";
    }
}

function showResultContainer() {
    mainGameContainer.style.display = 'none';
    gameWrapper.style.display = 'block';
}

function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = determineWinner(playerChoice, computerChoice);

    if (result === "User's Win") {
        nextButton.style.display = "inline-block";
        rulesToggleBtn.style.right = '130px';
    }

    playerChoiceImg.src = getPlayerIcon(playerChoice);
    computerChoiceImg.src = getComputerIcon(computerChoice);
    console.log(result);
}

rockBtn.addEventListener('click', () => {
    showResultContainer();
    playGame("rock");
});
paperBtn.addEventListener('click', () => {
    showResultContainer();
    playGame("paper");
});
scissorsBtn.addEventListener('click', () => {
    showResultContainer();
    playGame("scissors");
});

function getPlayerIcon(choice) {
    if (choice === 'rock') {
        document.getElementById('player-choice-circle').style.borderColor = "#0074B6";
        return "./img/rock.png";
    }
    if (choice === 'paper') {
        document.getElementById('player-choice-circle').style.borderColor = "#FFA943";
        return "./img/hand.png";
    }
    if (choice === 'scissors') {
        document.getElementById('player-choice-circle').style.borderColor = "#BD00FF";
        return "./img/scissor.png";
    }
}

function getComputerIcon(choice) {
    if (choice === 'rock') {
        document.getElementById('computer-choice-circle').style.borderColor = "#0074B6";
        return "./img/rock.png";
    }
    if (choice === 'paper') {
        document.getElementById('computer-choice-circle').style.borderColor = "#FFA943";
        return "./img/hand.png";
    }
    if (choice === 'scissors') {
        document.getElementById('computer-choice-circle').style.borderColor = "#BD00FF";
        return "./img/scissor.png";
    }
}
