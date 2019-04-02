$(document).ready(function() {
  //   Here we initialize all the scores for the game
  var wins = 0;
  var losses = 0;
  var crystalRandomNumber = [];
  var crystalOne;
  var crystalTwo;
  var crystalThree;
  var crystalFour;
  var randomNumber = [];
  var totalScore = 0;
  var emptyShell;
  var input;
  var check = false;

  //   Here we initialize a function to start the game whenever the function is called
  function initializeGame() {
    crystalOne = 0;
    crystalTwo = 0;
    crystalThree = 0;
    crystalFour = 0;
    crystalRandomNumber = [];
    randomNumber = [];
    totalScore = 0;
    check = false;

    // We create a random number between 19 en 120
    randomNumber = Math.floor(Math.random() * 101) + 19;

    //   We create a random number between 2 and 13, which we do 4 times over. One for every crystal
    for (let i = 0; i < 4; i++) {
      emptyShell = Math.floor(Math.random() * 11) + 2;
      crystalRandomNumber.push(emptyShell);
    }
    // Here we assign everyone of the random numbers to the 4 crystals
    crystalOne = crystalRandomNumber[0];
    crystalTwo = crystalRandomNumber[1];
    crystalThree = crystalRandomNumber[2];
    crystalFour = crystalRandomNumber[3];

    $("#crystal-one").val(crystalOne);
    $("#crystal-two").val(crystalTwo);
    $("#crystal-three").val(crystalThree);
    $("#crystal-four").val(crystalFour);

    //   We print the beginning scores onto the screen
    $("#random-number").html(randomNumber);
    $("#wins").html(wins);
    $("#losses").html(losses);
  }

  // We initialize the game
  initializeGame();

  //  This is the function that actually runs the game.
  //  We put the value of the crystals onto the totalscore
  $(".crystal").on("click", function() {
    input = parseInt($(this).val());
    totalScore += input;
    $("#your-score").html(totalScore);

    // if our totalscore matches the random number we created this will show that we have won.
    if (randomNumber === totalScore) {
      wins = wins + 1;
      check = true;
      $("#wins").html(wins);
      alert("You win!");
    }

    // if our totalscore doesn't match what the random number is than we lose
    if (randomNumber < totalScore) {
      losses = losses + 1;
      $("#losses").html(losses);
      alert("You Lose!");
      check = true;
    }
    // Here we reset the game
    if (check) {
      initializeGame();
    }
  });
});
