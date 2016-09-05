//CONSTRUCTOR TO MAKE LETTER OR DASH DISPLAY

var lettersInChosenWord = [];
var numBlanks = 0;
var dashedArray = [];

//GRAB THE GAME.JS RANDOM WORD
var wordImport = require('./game.js').word;

console.log(wordImport);

//BREAK WORD INTO INDIVIDUAL LETTERS
lettersInChosenWord = wordImport.randomWord.split("");

//SET NUMBER OF BLANKS
numBlanks = lettersInChosenWord.length;


//WORD CONSTRUCTOR
function Generator(wordImport, numBlanks) {
	this.word = wordImport,
	this.count = numBlanks,
	this.display = function() {

		//POPULATE DASHES FOR CHOSEN WORD
		for (var i = 0; i < this.count; i++) {

			dashedArray.push("_");
			
		}

		//DISPLAY THE DASHED WORD
		console.log(dashedArray.join(" "));
	}
}

//FEED DASHED WORD INTO CONSTRUCTOR
var dashedWord = new Generator(wordImport, numBlanks);


exports.dash = {
	dashedWord: dashedWord.display(),
}
//Push to console
// dashedWord.display();