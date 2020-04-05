/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function () {
    "use strict";
    var xhr, jsonDoc, team, i;
    
    xhr = new XMLHttpRequest();
    xhr.open("GET", "data/team.json");
    xhr.send();
    xhr.addEventListener("readystatechange", function () {
        if (xhr.status === 200) {
            jsonDoc = JSON.parse(xhr.responseText);
            $("team").innerHTML = "";
            for (i = 0; i < jsonDoc.employees.length; i += 1) {
                $("team").innerHTML += jsonDoc.employees[i].name + "<br>" + jsonDoc.employees[i].title + "<br><br>";
            }
        } else {
            window.alert("There was an error connecting to the document.");
        }
    });
});