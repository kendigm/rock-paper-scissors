//global scope state variables so they dont get reset in every run
var resultThisRound = "";
var computerWins = 0;
var userWins = 0;
var draws = 0;
var totalRounds = 0;
var userName = "anonymous";

var main = function (input) {
  var finalOutput = "";
  //convert input into lower case
  input = input.toLowerCase();

  if (validateInput(input) == "invalid") {
    finalOutput = "Oops! You can only choose 'Stone', 'Paper' or 'Scissors'";
    return finalOutput;
  } else {
    let computerWord = generateComputerChoice();

    if (input == computerWord) {
      resultThisRound = "It's a draw";
      draws++;
    } else if (input == "paper" && computerWord == "stone") {
      resultThisRound = "You win";
      userWins++;
    } else if (input == "paper" && computerWord == "scissors") {
      resultThisRound = "You lose";
      computerWins++;
    } else if (input == "stone" && computerWord == "paper") {
      resultThisRound = "You lose";
      computerWins++;
    } else if (input == "stone" && computerWord == "scissors") {
      resultThisRound = "You lose";
      computerWins++;
    } else if (input == "scissors" && computerWord == "paper") {
      resultThisRound = "You win";
      userWins++;
    } else if (input == "scissors" && computerWord == "stone") {
      resultThisRound = "You lose";
      computerWins++;
    }
    totalRounds++;

    finalOutput =
      resultThisRound +
      " this round. You have played " +
      totalRounds +
      " rounds so far. You have won " +
      userWins +
      " out of " +
      totalRounds +
      " which is " +
      Math.floor((userWins / totalRounds) * 100) +
      "% and the computer has won " +
      computerWins +
      " out of " +
      totalRounds +
      " which is " +
      Math.floor((computerWins / totalRounds) * 100) +
      "% ";
  }

  return finalOutput;
};

//Validate input, called in Main after input is cast to lower case. !important that return value is exact string as typed here
var validateInput = function (input) {
  if (input == "paper" || input == "stone" || input == "scissors") {
    return "valid";
  } else {
    return "invalid";
  }
};

//Refactored to put this in separate function!
var generateComputerChoice = function () {
  var computerChoice = Math.floor(Math.random() * 3);
  var computerWord = "";
  if (computerChoice == 0) {
    computerWord = "stone";
  } else if (computerChoice == 1) {
    computerWord = "paper";
  } else if (computerChoice == 2) {
    computerWord = "scissors";
  }
  return computerWord;
};
