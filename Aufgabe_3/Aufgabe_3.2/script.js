"use strict";
var Aufgabe_3_2;
(function (Aufgabe_3_2) {
    let button = document.getElementById("button");
    button.addEventListener("click", DataHTML);
    let buttonJSON = document.getElementById("JSbutton");
    buttonJSON.addEventListener("click", DataJSON);
    async function DataHTML() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://salinasapp.herokuapp.com";
        url += "/html";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        let display = document.getElementById("sendDataServer");
        display.innerText = answer;
    }
    async function DataJSON() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://salinasapp.herokuapp.com";
        url += "/json";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let myJSON = await response.json();
        console.log(myJSON);
    }
})(Aufgabe_3_2 || (Aufgabe_3_2 = {}));
//# sourceMappingURL=script.js.map