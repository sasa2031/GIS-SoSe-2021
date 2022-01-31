"use strict";
var Endabgabe;
(function (Endabgabe) {
    let button = document.getElementById("button");
    if (button) {
        button.addEventListener("click", sendData);
    }
    let buttonDisplay = document.getElementById("buttonDisplay");
    if (buttonDisplay) {
        buttonDisplay.addEventListener("click", storage);
    }
    let buttonShow = document.getElementById("buttonShow");
    if (buttonShow) {
        buttonShow.addEventListener("click", displayData);
    }
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://salinasapp.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";
        url += "/insert";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
    async function storage() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://salinasapp.herokuapp.com";
        // let url: RequestInfo = "https://localhost:3000";
        url += "/json";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.json();
        console.log(answer);
        localStorage.setItem("chosenContent", JSON.stringify(answer));
    }
    function displayData() {
        let display = document.getElementById("serverResponse");
        display.innerHTML = localStorage.getItem("chosenContent");
    }
    // tslint:disable-next-line: typedef
    let today = new Date();
    // tslint:disable-next-line: typedef
    let day = today.toLocaleDateString();
    document.getElementById("date").innerHTML = "Anlegedatum: " + "" + day;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map