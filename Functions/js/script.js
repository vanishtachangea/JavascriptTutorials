/*function displayCar(colour, make, model)
{
    window.document.write("I own a " + colour + "   " +make+ " "+model+ ".<br>");
}
displayCar("white", "toyota", "vitz");
displayCar("a", "b", "c");
*/
var i, base;
function calculate(numbers)
{
    base = Number(numbers);
    for( i=1;i<arguments.length;i+=1)
        {
            base +=Number(arguments[i]);
        }
   
    return String(base)+"<br>";
}

 window.document.write(calculate(2,12,10, 5, 8, 1,1));