/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var createRollover = function (imgTag, secondUrl, secondAlt) {
    "use strict";
    //STORE FIRST IMAGE INFO
    var firstUrl, firstAlt, image;
    
    firstUrl = imgTag.src;
    firstAlt = imgTag.alt;
    
    //PRELOAD SECOND IMAGE
    image = new Image();
    image.src = secondUrl;
    
    //CREATE EVENT HANDLERS
    var mouseover = function () {
        imgTag.src = secondUrl;
        imgTag.alt = secondAlt;
    };
    var mouseout = function () {
        imgTag.src = firstUrl;
        imgTag.alt = firstAlt;
    };
    
    //ATTACH EVENT HANDLERS 
    evt.attach(imgTag, "mouseover", mouseover);
    evt.attach(imgTag, "mouseout", mouseout);
};

window.onload = function () {
    "use strict";
    createRollover($("img1"), "images/wakeboard.jpg", "Zak wakeboards with his boat");
    createRollover($("img2"), "images/race.jpg", "Zak stays active so he can race");
};
