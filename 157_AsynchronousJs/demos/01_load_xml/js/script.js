var $ = function(id)
{
    "use strict";
    return window.document.getElementById(id);

};
window.addEventListener("load", function()
{
    "use strict";
    var xhr, xmlDoc, team, i;
    xhr = new XMLHttpRequest();
    xhr.open("GET", "C://10_Development//6_Javascript//157_AsynchronousJs//demos//load_xml//data//team2.xml");
    xhr.send();
    xhr.addEventListener("readstatechange", function()
    {
        if(xhr.readystate === 4 && xhr.status ===200)
        {
             xmlDoc = xhr.responseXML;
             team = xmlDoc.getElementByTagName("teammember");
            for( i=0;i<team.length; i+=1)
            {
                $("team").innerHTML +=xmlDoc.getElementById("name")[i].childeNodes[0].nodevalue +"<br>"+
                xmlDoc.getElementById("title")[i].childeNodes[0].nodevalue +"<br>"+
                xmlDoc.getElementById("bio")[i].childeNodes[0].nodevalue +"<br>";

            }
        }
        else{
            window.alert("There was an error conectiong ");
        }
    });
});