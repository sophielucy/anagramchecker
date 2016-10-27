function isAnagram() {

    //get words from html form
    var word = $("#word1").val();
    var testWord = $("#word2").val();

    //make the words lowercase so that check is case insensitive
    word = word.toLowerCase();
    testWord = testWord.toLowerCase();

    //check if there is input in both fields
    if(word===""||testWord===""){
        window.alert("Please enter a word in both fields");
        return;
    }

    //check if words are the same
    if(word===testWord){
        $(".results").empty();
        $("<p>SUCCESS! AN ANAGRAM WAS BORN!</p>").appendTo(".results");
        return;
    }

    //make sure that the word consists of only letters, no numbers or symbols
    if (isAlpha(word) == false || isAlpha(testWord) == false) {
        $(".results").empty();
        window.alert("Please enter words made up of letters and spaces only");
        return;
    }

    //split the words into arrays of chars
    var testArray = testWord.split("");
    var wordArray = word.split("");

    //sort the arrays
    testArray = testArray.sort();
    wordArray = wordArray.sort();
    
    //check the length of both arrays
    if(wordArray.length == testArray.length){
        //check each of the elements to check for exact match
        for(var i=0, l=wordArray.length; i<l; i++){
            if(wordArray[i]!==testArray[i]){
                $(".results").empty();
                $("<p>Oh no! Those words are not anagrams of each other :(</p>").appendTo(".results");
                return;        
            }
        }
        $(".results").empty();
        $("<p>SUCCESS! AN ANAGRAM WAS BORN!</p>").appendTo(".results");
        return;
    }
    
    else {
        $(".results").empty();
        $("<p>Oh no! Those words are not anagrams of each other :(</p>").appendTo(".results");
        return;
    }
}

function isAlpha(testString) {
    var pattern = new RegExp(/^[a-z\s]+$/i);
    if (pattern.test(testString))
        return true;
    else
        return false;
}

$("#word1,#word2").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        isAnagram();
    }
})

