//CONSTRUCTOR CHECKS LETTER AGAINST SELECTED WORD

//RANDOM WORD IS SPLIT INTO THE ARRAY
var wordArray = [];

//ARRAY WITH LETTER AND DASHES
var blanksAndSuccesses = [];

var wrongGuesses = [];

//USER LETTER PICK IMPORT FROM MAIN.JS
var letterImport = require('./main.js').letter;

//GRAB THE RANDOM WORD FROM GAME.JS
var wordImport = require('./game.js').word;
console.log(wordImport.randomWord);

//GRAB THE LENGTH OF THE RANDOM WORD
var numBlanks = wordImport.randomWord.length;


//LETTER CONSTRUCTOR
function CheckLetter(letter, word, count) {
	this.letter = letter,
	this.word = word,
	this.count = count,
	this.checker = function(){
		
		//TOGGLE FOR IF LETTER IS IN WORD
		var letterInWord = false;

		//SET THE SPLIT RANDOM WORD INTO THE ARRAY
		var wordArray = this.word.split("");

		//CHECK THE ARRAY
		for(var i = 0; i < this.count; i++) {

			//POPULATE WITH DASHES
			blanksAndSuccesses.push("_");

			if(wordArray[i] == this.letter) {
			
				//SET LETTERINWORD TO TRUE
				letterInWord = true;
			}
		}

		if (letterInWord) {
			for (var i = 0; i < this.count; i++){
				
				if (wordArray[i] == this.letter) {

					//REPLACE DASHES WITH LETTER
					blanksAndSuccesses[i] = this.letter;
				}
				else {
					// //PUSH LETTER INTO WRONG GUESSES
					wrongGuesses.push(letter);
				}
		}
		// console.log(blanksAndSuccesses.join(" "));
	}
}
}



var letterGuess = new CheckLetter(letterImport.guess.letter, wordImport.randomWord, numBlanks);

letterGuess.checker();
//EXPORT GUESS
exports.guess = {
	array: blanksAndSuccesses.join(" "),
}