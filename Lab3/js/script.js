//Global Variables
var entry;
var average;
var score1;
var score2;
var score3;
var total = 0;


//Get 3 scors from the user and ad them together
entry = window.prompt("enter test score 1 ");
score1 = parseInt(entry, 10);
total +=score1;

entry = window.prompt("enter test score 2 ");
score2 = parseInt(entry, 10);
total +=score2;


entry = window.prompt("enter test score 2 ");
score3 = parseInt(entry, 10);
total +=score3;

//Calculate the average
average = parseInt(total/3, 10);

//Display the result
document.write(" first score : "+String(score1) + "<br>");

document.write("  score 2 : "+String(score2) + "<br>");

document.write("  score 3 : "+String(score3) + "<br>");

document.write(" average : "+String(average) + "<br>");
