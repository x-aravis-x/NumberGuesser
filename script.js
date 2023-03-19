let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    if (humanDifference === computerDifference) {
        return true;
    } else if (humanDifference < computerDifference) {
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    if ('human' === winner) {
        humanScore++;
    } else {
        computerScore++;
    }
};

function advanceRound() {
    currentRoundNumber++;
}