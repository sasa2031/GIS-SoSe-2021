"use strict";
var Endabgabe;
(function (Endabgabe) {
    let deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", remove);
    let buttonShow = document.getElementById("buttonShow");
    if (buttonShow) {
        buttonShow.addEventListener("click", storage);
    }
    function storage() {
        let display = document.getElementById("serverResponse");
        display.innerHTML = localStorage.getItem("chosenContent");
    }
    function remove() {
        delete localStorage.chosenContent;
        let display = document.getElementById("serverResponse");
        display.innerHTML = "";
    }
    // tslint:disable-next-line: typedef
    let today = new Date();
    // tslint:disable-next-line: typedef
    let day = today.toLocaleDateString();
    document.getElementById("date").innerHTML = "Anlegedatum: " + "" + day;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_deets.js.map