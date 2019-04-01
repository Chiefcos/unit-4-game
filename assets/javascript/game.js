$(document).ready(function() {
  alert("I'm working");

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

  function initializeGame() {
    crystalOne;
    crystalTwo;
    crystalThree;
    crystalFour;
    crystalRandomNumber = [];
    randomNumber = [];
    TotalScore;
  }

  randomNumber = Math.floor(Math.random() * 101) + 19;
  console.log("i'm randomNumber", randomNumber);

  for (let i = 0; i < 4; i++) {
    emptyShell = Math.floor(Math.random() * 11) + 2;
    console.log("i am emptyshell", emptyShell);
    crystalRandomNumber.push(emptyShell);
  }

  console.log("I am crystalRandomNumber", crystalRandomNumber);

  crystalOne = crystalRandomNumber[0];
  crystalTwo = crystalRandomNumber[1];
  crystalThree = crystalRandomNumber[2];
  crystalFour = crystalRandomNumber[3];

  //   crystalOne = $("#crystal-one").val;
  //   $("#crystal-two").append(crystalTwo);
  //   $("#crystal-three").append(crystalThree);
  //   $("#crystal-four").append(crystalFour);

  //   console.log("I am crystal one", $("#crystal-one").val;
  console.log("i am crystaltwo", crystalTwo);
  console.log("i am crystalthree", crystalThree);
  console.log("i am crystalfour", crystalFour);

  $("#random-number").html(randomNumber);
  $("#your-score").html(totalScore);
  $("#wins").html(wins);
  $("#losses").html(losses);

  //   $(".crystal").on("click", function() {
  //     totalScore += $(this).val;
  //     console.log("I'm the total score after clicking", totalScore);
  //   });

  $("#crystal-one").on("click", function() {
    totalScore += crystalOne;
    console.log(totalScore);
    $("#your-score").html(totalScore);
    if (randomNumber === totalScore) {
      wins = wins + 1;
      $("#wins").html(wins);
      console.log(totalScore);
      alert("Im working: You win!");
      initializeGame();
    }
    if (randomNumber < totalScore) {
      losses = losses + 1;
      $("#losses").html(losses);
      alert("Im working: You Lose!");
      initializeGame();
    }
  });

  $("#crystal-two").on("click", function() {
    totalScore += crystalTwo;
    console.log(totalScore);
    $("#your-score").html(totalScore);
    if (randomNumber === totalScore) {
      wins = wins + 1;
      $("#wins").html(wins);
      console.log(totalScore);
      alert("Im working: You win!");
      initializeGame();
    }
    if (randomNumber < totalScore) {
      losses = losses + 1;
      $("#losses").html(losses);
      alert("Im working: You Loss!");
      initializeGame();
    }
  });

  $("#crystal-three").on("click", function() {
    totalScore += crystalThree;
    console.log(totalScore);
    $("#your-score").html(totalScore);
    if (randomNumber === totalScore) {
      wins = wins + 1;
      $("#wins").html(wins);
      console.log(totalScore);
      alert("Im working: You win!");
      initializeGame();
      console.log(initializeGame);
    }
    if (randomNumber < totalScore) {
      losses = losses + 1;
      alert("Im working: You Loss!");
      $("#losses").html(losses);
      initializeGame();
      console.log(initializeGame);
    }
  });

  $("#crystal-four").on("click", function() {
    totalScore += crystalFour;
    console.log(totalScore);
    $("#your-score").html(totalScore);
    if (randomNumber === totalScore) {
      wins = wins + 1;
      $("#wins").html(wins);
      console.log(totalScore);
      alert("Im working: You win!");
      initializeGame();
    }
    if (randomNumber < totalScore) {
      losses = losses + 1;
      $("#losses").html(losses);
      alert("Im working: You Loss!");
      initializeGame();
    }
  });

  console.log("totalscore is a ", typeof totalScore);
  console.log("randomnumber is a ", typeof randomNumber);

  //   if ($("#random-number") === $("#your-score")) {
  //     wins = wins + 1;
  //     $("#wins").html(wins);
  //     console.log(totalScore);
  //     alert("Im working: You win!");
  //   }
  //   if (randomNumber < totalScore) {
  //     losses = losses + 1;
  //     alert("Im working: You Loss!");
  //   }
});
