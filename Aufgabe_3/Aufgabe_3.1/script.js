"use strict";
var P_3_1;
(function (P_3_1) {
    //Aufgabe 2
    let button = document.getElementById("button");
    button.addEventListener("click", Data);
    async function Data() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("fname"));
        for (let entry of formData) {
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let query = new URLSearchParams(formData);
        let url = "https://salinasapp.herokuapp.com";
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
})(P_3_1 || (P_3_1 = {}));
//# sourceMappingURL=script.js.map