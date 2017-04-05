// $(document).ready(function(){

//     var humanScores = new Array;
//     var botScores = new Array;
//     var humanScore = 0;
//     var botScore = 0;


// $("button").click(function(){

var userChoices = ['rock', 'paper', 'scissors'];

alert("Empiezo");

$('#rock').click(function(){
  $("#result").text(playsGame("rock", randomChoice()));
});

$('#paper').click(function(){
  $("#result").text(playsGame("paper", randomChoice()));
});

$('#scissors').click(function(){
  $("#result").text(playsGame("scissors", randomChoice()));
});


function playsGame(userChoice, computerChoice){
  $('#user_choice').text("user choice was " + userChoice);
  $('#computer_choice').text("computer choice was " + computerChoice);
  if (computerChoice == userChoice){
    return "draw!";
  }
  switch (userChoice) {
    case "rock":
    if (computerChoice == "paper"){
      return "computer won";
    }
    break;
    case "paper":
    if (computerChoice == "scissors"){
      return "computer won";
    }
    break;
    case "scissors":
    if (computerChoice == "rock"){
      return "computer won";
    }
  }
  return "you won!"
}

function randomChoice(){
  var index = Math.floor( Math.random() * userChoices.length )
  return userChoices[index];
}
