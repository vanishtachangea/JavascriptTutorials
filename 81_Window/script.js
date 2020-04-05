//alert("test");
//var num = 1;
//window.console.log(window.num);
// window.console.log(Object.getOwnPropertyNames(window));
// window.console.log(window.navigator.userAgent);
// window.console.log(window.navigator.language);
// window.console.log(window.navigator.plugins);
// window.console.log(window.location.host);
var iframe =window.document.getElementById("iframe1");
iframe.src="http://localhost/";
var button1 = window.document.getElementById("idHref");
window.console.log(window.document.getElementById("idHref"));
window.console.log(button1);
button1.addEventListener("click", function()
{
    "use strict";
    window.console.log(button1);
    window.console.log(window.screen.colorDepth + "\n");
    window.console.log(window.screen.pixelDepth + "\n");
    window.console.log(window.screen.height + "\n");
    window.console.log(window.screen.width + "\n");
    //window.location.href="http://www.google.com";
});

var idAssign = window.document.getElementById("idAssign");
idAssign.addEventListener("click", function()
{
    "use strict";
    window.console.log(idAssign);
    window.location.assign("http://www.google.com");
});
 
var idReplace = window.document.getElementById("idReplace");
idReplace.addEventListener("click", function()
{
    "use strict";
    window.console.log(window.history.length);
    window.location.replace("http://www.google.com");
});


var idWindowOpen = window.document.getElementById("idWindowOpen");
idWindowOpen.addEventListener("click", function()
{
    "use strict";
     window.open("popup.html","popup", "width=400, height=400, resizeable=yes" );
});