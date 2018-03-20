// I could not write this code from scratch. I borrowed much of this code from an internet example that you are undoubtably aware of with a simple internet and youtube search (its just too obvious not to acknowledging that at the onset). 

//I can't keep up in class so the only thing I can do at this point is try to get more attention with TAs but thats a challenge as other are always with them. I will seek tutoring shortly. 

// What is working to some extent is deconstructing solution code when released and try to figure it out. I'm sorry. I'm so lost.

// Here is my take based on example I found.

// I understand the need to set up global variables that include a random number result ...

var randomResult;

// ... the need for setting lost and win as variables and the setting them to zero so to assure they are zero values at start of game.
var lost = 0;
var win  = 0;

// ... that this is needed to reset a previous score to zero for next run.
var previous = 0;

// I understand the need for a function that starts the game and restarts it when done...
var resetStart = function () {

  // I understand what .empty method does (clears the content from and element) not exactly sure why iti is needed in this case?
  $(".crystals").empty();

  var images = [
    "assets/images/blue.jpeg",
    "assets/images/gray.jpeg",
    "assets/images/purple.jpeg",
    "assets/images/blueish.jpeg"];


// ... defines random result as a integer between 19 and 120. Math.random in and of itself finds a random number between 0 and up to but not including 1, Math.floor rounds value to an integer. 
randomResult = Math.floor(Math.random() * (120 - 19 +1)) + 19;

// I understand the .html method will write the result to the html page where the id is, I cant get it to work in my case Why?
$("#result").html("RandomResult: " + randomResult);

// The now famous 'for' loop. I am getting the concept of this. It is what it is. I just wish I could write it from memory. The for loop iterates thru an array set til done in this case 4 times.
for(var i = 0; i < 4; i++){

  // I get the concept of random number generator and as noted in prior use case, the need in this example to get a random number between 10 and 12 for each crystal.
  var random = Math.floor(Math.random() * 11) +1;

  // I know this is supposed to change the crystal values in html as game progress, I dont know what it means excatly or why or how I'm writing it?
  var crystal = $("<div>");
      crystal.attr({
        "class": "crystal",
        "data-random": random
      });
// This actually does "writing" (with append method)of value to each of the four crystals html elements. 
  $(".crystals").append(crystal);    
    }
// A temporary method to count crystals.
    $("#previous").html(previous)
}
// I know this is evokes the function to start or reset the game. 
resetStart();

// An on click function to execute when a crystal image is clicked.
$(".crystal").on("click", ".crystal", function() {

  //I know this changes string to a number why o I need it?
var num = parseInt($(this).attr("data-random"));

previous += num;

// A temporary method to count crystals.
$("#previous").html(previous)

// I get if statement even though I have a hard time writing them. I know that this statement means that if the previous value is grater than the total random "game value" it tallies and loss 
if(previous > randomResult){
  lost--;

  //and is supposed to write it to html in space for losses.
  $("#losses").html(losses);

  previous = 0;

// A temporary method to count crystals.
  $("#previous").html(previous)

//,, ultimately restarting game.
  resetStart();

  // If previousl value in equal to random game value...
} else if(previous === randomResult){
//... a win is iterated and 
  win++;
//... written to space in page for wins
  $("#wins").html(win);

// A temporary method to count crystals.
  $("#previous").html(previous)
}

});

