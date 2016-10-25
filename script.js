
function isAnagram( word, testWord  ){

	//check if there is input in both fields


	//get words from html form and make strings lower case
	word = document.getElementById("word1").value;
	testWord = document.getElementById("word2").value;

	console.log();
	//make sure there are no spaces in the string
	if(containsWhitespace(word)==true || containsWhitespace(testWord)==true){
		window.alert("Please eliminate all spaces from your input");
	}

	//split the words into arrays of chars

	var testArray = testWord.split("");

	var wordArray = word.split("");
	//sort the arrays
	var sortedTest = testArray.sort();
	var sortedWord = wordArray.sort();
	//check if they equate
	if(sortedWord == sortedTest){
		window.alert("SUCCESS! AN ANAGRAM WAS BORN!");
		return true;
	}
	else
	{
		window.alert("Oh no! Those words are not anagrams of each other :(")
		return false;
	}
}	

function containsWhitespace( testString ){
	if(testString.indexOf(' ')>=0)
		return true;
	else
		return false;
}