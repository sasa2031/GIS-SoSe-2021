"use strict";
var Aufgabe_2_3;
(function (Aufgabe_2_3) {
    //Aufgabe 1
    function rectangle() {
        let div = document.createElement("div");
        document.body.appendChild(div); /* Eltern - Kindbeziehung */
        div.style.height = (Math.random() * 400).toString() + "px";
        div.style.width = (Math.random() * 200).toString() + "px";
        div.style.backgroundColor = "red";
        div.style.position = "relative";
        div.style.marginLeft = (Math.random() * 100).toString() + "px";
        div.style.marginTop = (Math.random() * 100).toString() + "px";
        div.style.marginRight = (Math.random() * 100).toString() + "px";
        div.style.marginBottom = (Math.random() * 100).toString() + "px";
    }
    for (let i = 0; i < 0; i++) {
        rectangle();
    }
    function handleLoad(_load) {
        location.reload();
    }
    document.querySelector("#loadBtn").addEventListener("click", handleLoad);
    document.querySelector("#addBtn").addEventListener("click", rectangle);
})(Aufgabe_2_3 || (Aufgabe_2_3 = {}));
//# sourceMappingURL=script2.js.map