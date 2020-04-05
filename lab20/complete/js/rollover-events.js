/*eslint-env browser*/

var evt = {
    attach: function (node, eventName, func) {
        "use strict";
        if (node.addEventListener) {
            node.addEventListener(eventName, func);
        } else if (node.attachEvent) {
            node.attachEvent("on" + eventName, func);
        }
    }
};