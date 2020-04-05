function factor(factorial)
{
    "use strict";
    var result =1, count;
    for(count = factorial; count>1; count -=1)
    {
        result *=count;
    }
    return result;
}
window.console.log(factor(4));

(function factor2(factorial)
{
    "use strict";
    var result =1, count;
    for(count = factorial; count>1; count -=1)
    {
        result *=count;
    }
    //return result;
    window.console.log(result);

}(4));

function factor3(factorial)
{
    "use strict";
    if(factorial <= 1)
    {
        return 1;
    }
    else 
    return (factorial * factor3(factorial -1 ));
}
window.console.log(factor3(4));