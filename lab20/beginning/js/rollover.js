/*eslint-env browser*/
var $ = function(id)
{
    "use strict";
    return window.document.getElementById(id);

}
var createRollover = function(imgTag, secondUrl, secondAlt)
{
    "use strict";
    // Store First Image info
    var firstUrl, firstAlt, image;
    firstUrl =imgTag.src;
    firstAlt = imgTag.alt;

    //Preload Second Image
    image = new Image();
    image.src = secondUrl;

    //Create Event Handlers
    var mouseover = function()
    {
        imgTag.src = secondUrl;
        imgTag.alt = secondAlt;
    };

    var mouseout = function()
    {
        imgTag.src = firstUrl;
        imgTag.alt = firstAlt;
    };

    //Attach Event Handlers
    evt.attach(imgTag, "mouseout", mouseout);
    evt.attach(imgTag, "mouseover", mouseover);
}
;

window.addEventListener("load", function()
{
    "use strict";
    createRollover($("img1"), "images/wakeboard.jpg", "Zak wakeboard");
    createRollover($("img2"), "images/race.jpg", "Zak race");
}

);



