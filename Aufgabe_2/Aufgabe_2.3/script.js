"use strict";
var Aufgabe_2_3;
(function (Aufgabe_2_3) {
    //Aufgabe 3
    //b)
    function generateSizeElement(_größe) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _größe.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showDurchmesser);
        button.dataset.durchmesser = _größe.durchmesser.toString();
        button.innerText = "Durchmesser: " + _größe.durchmesser;
        div.appendChild(button);
        return div;
    }
    for (let i = 0; i < Aufgabe_2_3.größen.length; i++) {
        let x = generateSizeElement(Aufgabe_2_3.größen[i]);
        document.body.appendChild(x);
    }
    //c)
    function showDurchmesser(_event) {
        console.log(_event.target);
        let target = _event.target;
        console.log(target.dataset.durchmesser);
        for (let i = 0; i < Aufgabe_2_3.größen.length; i++) {
            if (Aufgabe_2_3.größen[i].durchmesser.toString() == target.dataset.durchmesser) {
                console.log(Aufgabe_2_3.größen[i]);
            }
        }
    }
})(Aufgabe_2_3 || (Aufgabe_2_3 = {}));
//# sourceMappingURL=script.js.map