function isAnagram(word, testWord) {

    //get words from html form and make strings lower case
    word = $("#word1").val();
    testWord = $("#word2").val();

    //check if there is input in both fields
    if(word==""||testWord==""){
        window.alert("Please enter a word in both fields");
        return false;
    }

    //make sure there are no spaces in the string
    if (containsWhitespace(word) == true || containsWhitespace(testWord) == true) {
        window.alert("Please eliminate all spaces from your input");
    }

    //split the words into arrays of chars
    var testArray = testWord.split("");
    var wordArray = word.split("");

    //sort the arrays
    var sortedTest = testArray.sort();
    var sortedWord = wordArray.sort();
    
    //check the length of both arrays
    if(sortedWord.length == sortedTest.length){
        //check each of the elements to check for exact match
        for(var i=0, l=sortedWord.length; i<l; i++){
            if(sortedWord[i]!=sortedTest[i]){
                window.alert("Oh no! Those words are not anagrams of each other :(");
                return false;        

            }
        }
        window.alert("SUCCESS! AN ANAGRAM WAS BORN!");
        return true;
    }
    
    else {
        window.alert("Oh no! Those words are not anagrams of each other :(");
        return false;
    }
}

function containsWhitespace(testString) {
    if (testString.indexOf(' ') >= 0)
        return true;
    else
        return false;
}

$("#word1").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        isAnagram(word1, word2);
    }
})

$("#word2").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        isAnagram(word1, word2);
    }
})
