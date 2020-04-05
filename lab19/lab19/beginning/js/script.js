
var $ = function(id)
{
    "use strict";
    return window.document.getElementById(id);
};

var createClickCounter = function()
{
    var count =0;
    var clickCounter = function()
    {
        count +=1;
        window.console.log(this.id + "count is "+ count);
    };
    return clickCounter;
};

window.addEventListener("load", function () 
{
    "use strict";
    $("button1").addEventListener("click", createClickCounter());
    $("button2").addEventListener("click", createClickCounter());
}
);




