var p1RandNum = Math.floor(Math.random()*6) +1;
var p2RandNum = Math.floor(Math.random()*6) +1;

document.querySelector(".img1").setAttribute("src", "images/dice" + p1RandNum + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + p2RandNum + ".png");

if (p2RandNum > p1RandNum) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (p1RandNum > p2RandNum) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "DRAW";
}
