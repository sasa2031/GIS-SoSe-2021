"use strict";
var Aufgabe_3_4;
(function (Aufgabe_3_4) {
    let button = document.getElementById("button");
    button.addEventListener("click", sendData);
    let buttonJSON = document.getElementById("buttonJS");
    buttonJSON.addEventListener("click", dataJson);
    let buttonDelete = document.getElementById("buttonDelete");
    buttonDelete.addEventListener("click", deleteData);
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
    async function dataJson() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://salinasapp.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";
        url += "/json";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.json();
        console.log(answer);
        let display = document.getElementById("serverResponse");
        display.innerText = JSON.stringify(answer);
    }
    async function deleteData() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://salinasapp.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";
        url += "/delete";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
})(Aufgabe_3_4 || (Aufgabe_3_4 = {}));
//# sourceMappingURL=script.js.map