
//RANDOMLY SELECTS WORD 

//WORD ARRAY
var wordList = ["thrall", "sylvanas", "ogrim", "alexstraza", "jaina", "guldan", "illidan"];

//PICK A WORD AT RANDOM
chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

// console.log("game.js " + chosenWord);

//EXPORT TO LETTER.JS
exports.word = {
	randomWord: chosenWord,
}