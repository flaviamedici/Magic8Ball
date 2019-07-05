var button = document.getElementById("button");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");
var options = [
    "yes",
    "Without a doubt",
    "Don't count on it",
    "Outlook not so good",
    "Most likely",
     "No", 
     "Ask again later",
     "It is certain",
     "maybe",
     "Cannot predict now",
     "You may rely on it"
    ];

button.addEventListener("click", function() {
    if(input.value.length < 1){
        alert("Please enter a question!");
    } else {
        eight.innerText = "";
        var num = input.value.length % options.length;
        answer.innerText = options[num];
    }
});