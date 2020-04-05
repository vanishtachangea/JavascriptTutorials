/*var myButton = window.document.getElementById("myButton");
myButton.addEventListener("click", writeMessage);
function writeMessage()
{
    window.alert("you clicked");
}




myButton.addEventListener("click", function()
               {          
        "use strict";                
      window.alert("you clicked");   
    }
                         );
*/


function init()
{
    "use strict";
    var myButton = window.document.getElementById("myButton");
    myButton.addEventListener("click", function()
                              {
        window.alert("hellow in init");
    }
    
    
    );
    
}

window.addEventListener("load", init);
