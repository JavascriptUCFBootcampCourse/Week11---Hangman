//LOGIC

//PULL THE INQUIRER PACKAGE
var inquirer = require('inquirer');

//DISPLAYS THE RANDOM WORD FROM GAME.JS AS DASHES
function startGame(){

	var dashImport = require('./letter.js').dash;
}

//USER GUESSES LETTER 
function userInput(){
	//PROMPT USER
	inquirer.prompt([{
	    name: "letter",
	    message: "Which letter do you guess?"
	}])
	.then(function(answers) {
	    
	    //ASSIGN ANSWER TO USERGUESS
	    var userGuess = answers;
	    
	    //EXPORT USERGUESS TO WORD.JS
	    exports.letter = {	
			guess: userGuess,
		}

		checkGuess();
	})
}

function checkGuess(){
console.log("In checkGuess");
	//IMPORT WORD.JS
	var guessImport = require('./word.js').guess;

	console.log(guessImport.array);


}

// function endGame(){
	
// 	if (lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
			
// 			console.log("For the Horde!");

// 			//Restart the game
// 			startGame();
// 		}

// 	//If no more guesses
// 	else if (numGuesses == 0) {

// 		console.log("What is dead, may never die.");

// 		//Restart game
// 		startGame();
// 	}
// }

startGame();

userInput();

// checkGuess();

// endGame();