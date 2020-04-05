/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

// var loadHtml = function (e) {
//     "use strict";
//     var xhr, file;
//     xhr = new XMLHttpRequest();
//     file = e.currentTarget.id;
    
//     xhr.open("GET", file + ".html");
//     xhr.send();
//     xhr.addEventListener("readystatechange", function () {
//         if (xhr.status === 200) {
//             window.document.querySelector("#solution").innerHTML = xhr.responseText;
//         }
//     });
// };
var loadHtml = function(e)
{
    "use strict";
    var xhr, file;
     xhr = new XMLHttpRequest();
     file = e.currentTarget.id;
    xhr.open("GET", file+".html");
    xhr.addEventListener("readystatechange", function()
    {
        if(xhr.status ===200)
        {
            window.document.querySelector("#solution").innerHTML = xhr.responseText;
        }
    }
);
    ;
};

window.addEventListener("load", function () {
    "use strict";
    $("vprospect").addEventListener("click", loadHtml);
    $("vconvert").addEventListener("click", loadHtml);
    $("vretain").addEventListener("click", loadHtml);
});