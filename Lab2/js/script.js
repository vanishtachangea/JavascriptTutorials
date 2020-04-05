var milesDriven = window.prompt("Enter your miles driven");
var gallons = window.prompt("Enter the size of your tank in gallons");
var mpg = milesDriven/gallons;
document.write("You drove: " + milesDriven +"<br>");
document.write("Your tank size :  " + gallons +"<br>");
document.write("You  :  " + parseFloat(mpg) +" miles per gallon <br>");
document.write(eval("2 + 2"));
document.write(isFinite(5));