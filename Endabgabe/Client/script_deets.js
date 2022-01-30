"use strict";
var Endabgabe;
(function (Endabgabe) {
    let deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", deleteData);
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
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_deets.js.map