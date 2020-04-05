/*function displayTitle()
{
    "use strict";
    
}
function playGame()
{
    "use strict";
    var number, count, guess;
    number = Math.floor(Math.random() * 10 + 1);
    window.alert("I am guessing anumber between 1 and 10 ");
    count = 1;
    while(true)
        {
            guess = Number(window.prompt("Enter your guess"));
            if(guess < number)
                {
                    window.alert("Too low");
                    count +=1;
                }
            else if(guess > number)
                {
                      window.alert("Too High");
                    count +=1;                  
                }
                        else if(guess === number)
                {
                      window.alert("you guess the number in " + count + "tries!");
                   return;                 
                }
        }
}
function main()
{
    "use strict";
    displayTitle();
    var playAgain="y";
    while(playAgain === "y")
        {
            playGame();
            playAgain= window.prompt("Do you want to play again? (y/n)");
        }
    window.alert("Thanks for playing");
}
main();
*/

/*
var Car = function()
{
    "use strict";
    window.console.log("the car dhas r=");
};
var a = new Car();
var b = new Car();
var c = new Car();
var d = new Car();
*/

/* 
var Car = function (make)
{
    "use strict";
    this.make= make;
};
Car.prototype.displayMake = function()
{
    "use strict";
    window.console.log("make: "+ this.make);

}
var a = new Car("make-toyota");
a.displayMake();
*/

function Car(make)
{
    var make = make;
    var displayMake = function ()
    {
        window.console.log("You own a "+ make);
    }
    this.showCarInfo = function()
    {
        displayMake();
    }
}
var myCar = new Car("test");
myCar.showCarInfo();
myCar.make;
//myCar.displayMake();