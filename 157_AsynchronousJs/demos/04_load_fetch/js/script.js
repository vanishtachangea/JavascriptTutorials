/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

// window.addEventListener("load", function () {
//     "use strict";
//     var i;

//     fetch("data/team.json").then(function (response) {
//         if (response.status !== 200) {
//             window.alert("Looks like there was a problem.");
//             return;
//         }
//         response.json().then(function (data) {
//             $("team").innerHTML = "";
//             for (i = 0; i < data.employees.length; i += 1) {
//                 $("team").innerHTML += data.employees[i].name + "<br>" + data.employees[i].title + "<br><br>";
//             }
//         });
//     });
// });
window.addEventListener("load", function()
{
    "use strict";
    var i;
    fetch("data/team.json").then( function(response)
{
    if(response.status !=200)
    {
        window.alert("problem");
        return;
    }
    else
    {
response.json().then(function(data)
{
    $("team").innerHTML ="";
    for( i=0;i<data.employees.length;i+=1)
    {
        $("team").innerHTML += data.employees[i].name + "<br>" + data.employees[i].title+ "<br><br>";
    }
});
    
});

});