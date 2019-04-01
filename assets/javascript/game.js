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
    crystalOne;
    crystalTwo;
    crystalThree;
    crystalFour;
    crystalRandomNumber = [];
    randomNumber = [];
    TotalScore = 0;
    check = false;

    // We create a random number between 19 en 120
    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log("i'm randomNumber", randomNumber);
  }

  // We initialize the game
  initializeGame();

  //   We create a random number between 2 and 13, which we do 4 times over. One for every crystal
  for (let i = 0; i < 4; i++) {
    emptyShell = Math.floor(Math.random() * 11) + 2;
    console.log("i am emptyshell", emptyShell);
    crystalRandomNumber.push(emptyShell);
  }
  console.log("I am crystalRandomNumber", crystalRandomNumber);
  // Here we assign everyone of the random numbers to the 4 crystals
  crystalOne = crystalRandomNumber[0];
  crystalTwo = crystalRandomNumber[1];
  crystalThree = crystalRandomNumber[2];
  crystalFour = crystalRandomNumber[3];

  $("#crystal-one").val(crystalOne);
  $("#crystal-two").val(crystalTwo);
  $("#crystal-three").val(crystalThree);
  $("#crystal-four").val(crystalFour);

  //   Here we check if the value is actually appended to to crystals
  console.log("i am the actual one", $("#crystal-one").val());
  console.log("i am the actual one", $("#crystal-two").val());
  console.log("i am the actual one", $("#crystal-three").val());
  console.log("i am the actual one", $("#crystal-four").val());

  //   We print the beginning scores onto the screen
  $("#random-number").html(randomNumber);
  $("#wins").html(wins);
  $("#losses").html(losses);

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
      console.log(totalScore);
      alert("Im working: You win!");
    }

    // if our totalscore doesn't match what the random number is than we lose
    if (randomNumber < totalScore) {
      losses = losses + 1;
      $("#losses").html(losses);
      alert("Im working: You Lose!");
      check = true;
    }
    // Here we reset the game
    if (check) {
      initializeGame();
    }
  });
});
