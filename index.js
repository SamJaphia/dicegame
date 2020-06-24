var playerOne =prompt(" Player one what is your Name?");
var playerTwo = prompt("Player two What is your name?");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random()* 6 ) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + (randomNumber1) + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + (randomNumber2) + ".png");
document.querySelector(".player1").innerHTML = playerOne
document.querySelector(".player2").innerHTML = playerTwo

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It is a draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `${playerOne} Wins!`;    
} else {
    document.querySelector("h1").innerHTML = `${playerTwo} Wins!`;
}

