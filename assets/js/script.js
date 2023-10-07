var winsEl = document.querySelector(".win")
var lossesEl = document.querySelector(".lose")
var buttonEl = document.querySelector(".start-button");

var wins = winsEl.innerHTML;
var losses = lossesEl.innerHTML;

const words = ["attribute", "property", "variable", "browser", "DOM", "javascript", "object", "function", "method", "array"];
var word;

function chooseRandomWord() {
    //choose random word from words
    word = words[Math.floor(Math.random()*words.length)];

    //render the underlines based word length
    var wordArray = word.split("");
    console.log(wordArray);

    
}


buttonEl.addEventListener("click", function (){
    chooseRandomWord();
})