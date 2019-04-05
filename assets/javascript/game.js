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

  // these are the sound effects that play when you win or lose
  var winningSound = document.getElementById("win");
  var losingSound = document.getElementById("lose");
  var gameOverSound = document.getElementById("gameover");

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
    $("#your-score").html(totalScore);
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
      $(".pic1").css("display", "block");
      setTimeout(function() {
        winningSound.play();
      }, 2000);
      setTimeout(function() {
        $(".pic1").css("display", "none");
      }, 3600);
    }

    // if our totalscore doesn't match what the random number is than we lose
    if (randomNumber < totalScore) {
      losses = losses + 1;
      $("#losses").html(losses);
      check = true;
      $(".pic2").css("display", "block");
      losingSound.play();
      setTimeout(function() {
        $(".pic2").css("display", "none");
      }, 5000);
    }
    // Here we reset the game
    if (check) {
      if (wins + losses === 10) {
        $(".gameover").show();
        gameOverSound.play();
        if (wins > losses) {
          $(".subline").html("You Win!! <br /> Congratulations");
        }
        $(".resetbutton").on("click", function() {
          $(".gameover").hide();
          initializeGame();
          wins = 0;
          losses = 0;
          $("#wins").html(wins);
          $("#losses").html(losses);
        });
        return;
      }
      initializeGame();
    }
  });
});
