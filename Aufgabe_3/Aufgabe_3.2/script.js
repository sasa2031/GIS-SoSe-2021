"use strict";
var Aufgabe_3_2;
(function (Aufgabe_3_2) {
    let assarray = {};
    assarray["fname"] = "Salina";
    assarray["lname"] = "Weldemariam";
    assarray["email"] = "salina.weldemariam@hs-furtwangen.de";
    let button = document.getElementById("button");
    button.addEventListener("click", Data);
    let buttonJSON = document.getElementById("JSbutton");
    buttonJSON.addEventListener("click", Data);
    async function Data() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name"));
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
        let display = document.getElementById("sendDataServer");
        display.innerText = answer;
    }
})(Aufgabe_3_2 || (Aufgabe_3_2 = {}));
//# sourceMappingURL=script.js.map