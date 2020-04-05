/*eslint-env browser*/
var $ = function(id)
{
    "use strict";
    return window.document.getElementById(id);
};
var slideshow = 
{
    timer: null,
    nodes:
    {
        image:null, 
        caption:null
    },
    img:{ cache:[], counter:0},
    speed:4000,
    loadImages: function(slides)
    {
        "use strict";
        var image, i;
        for(i =0;i<slides.length;i+=1)
        {
            image = new Image();
            image.src=slides[i].href;
            image.title=slides[i].title;
            this.img.cache.push(image);
        }
        return this;
    },
    startSlideShow: function(image, caption)
    {
        "use strict";
        this.nodes.image =image;
        this.nodes.caption =caption;
        this.timer =setInterval(this.displayNextImage.bind(this),this.speed);
        return this;
    },
    displayNextImage: function()
    {
        "use strict";
        if(this.img.counter === this.img.cache.length)
        {
            this.img.counter = 0;
        }
        else
        {
            this.img.counter +=1;
        }
        var image = this.img.cache[this.img.counter];
        this.nodes.image.src=image.src;
        this.nodes.caption.innerHTML = image.title;

    }
};
window.addEventListener("load", function()
{
    "use strict";
    var slides =
    [
        {href:"images/backpack.jpg", title:"he backpacks often"},
        {href:"images/boat.jpg", title:"he does boating often"},
        {href:"images/camaro.jpg", title:"he camaro often"},
        {href:"images/punk.jpg", title:"he punks often"},
        {href:"images/race.jpg", title:"he races often"}
        
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
});

(function ()
{
    "use strict";

window.console.log("hello this is immedidately invoked function");
}());

(function displayMessage()
{
    "use strict";
    window.console.log("Hello World");
}()
);
//displayMessage();

(function calculate()
{
    "use strict";
    var num1;
    var num2;
    
    function init()
    {
        num1 = 5;
        num2 = 10;
    }
    init();
    
}()
);

var calculate = (function ()
{
    "use strict";
    var num1=8;
    var num2=3;
    
return num1+num2;
    
}()
);
window.alert(calculate);
window.console.log(calculate.num1);

(function calculate2(num1, num2)
{
    var total =num1 + num2;
    window.console.log(total);
}(8,9)

);

var g ="i am global";
window.console.log(g);
//window.console.log(o);
//window.console.log(i);
var  outerFunction = function()
{
    var o = "I am outer";
    window.console.log(g);
    window.console.log(o);
    //window.console.log(i);
    var innerFunction = function()
    {
        var i = "I am inner";
        window.console.log(g);
        window.console.log(o);
        window.console.log(i);
    }
    innerFunction();
};
outerFunction();

var $ = function(id)
{
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
    $("button1").addEventListener("click", createClickCounter);
    $("button2").addEventListener("click", createClickCounter);
}
);




