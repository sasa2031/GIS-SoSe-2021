"use strict";
var Aufgabe_2_4;
(function (Aufgabe_2_4) {
    //Aufgabe 1
    //a)
    //Anzeige der Bilder auf der jeweiligen Seite
    function generatePizzapart(_part) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _part.image;
        image.style.width = "250px";
        div.appendChild(image);
        let button = document.createElement("button");
        let buttonText = document.createTextNode(_part.option);
        button.appendChild(buttonText);
        button.addEventListener("click", storage);
        button.dataset.option = _part.option;
        button.dataset.image = _part.image;
        div.appendChild(button);
        return div;
    }
    if (document.querySelector("title").getAttribute("id") == "site1") {
        for (let i = 0; i < Aufgabe_2_4.myObj.groesse.length; i++) {
            let x = generatePizzapart(Aufgabe_2_4.myObj.groesse[i]);
            document.body.appendChild(x);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site2") {
        for (let i = 0; i < Aufgabe_2_4.myObj.toppings.length; i++) {
            let x = generatePizzapart(Aufgabe_2_4.myObj.toppings[i]);
            document.body.appendChild(x);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "site3") {
        for (let i = 0; i < Aufgabe_2_4.myObj.service.length; i++) {
            let x = generatePizzapart(Aufgabe_2_4.myObj.service[i]);
            document.body.appendChild(x);
        }
    }
    //Abspeichern der ausgewählten Bilder
    function storage(_event) {
        if (document.querySelector("title").getAttribute("id") == "site1") {
            let target = _event.target;
            target.style.color = "green";
            target.style.fontWeight = "bold";
            localStorage.setItem("chosenSize", target.dataset.option);
            localStorage.setItem("chosenSizeImage", target.dataset.image);
        }
        if (document.querySelector("title").getAttribute("id") == "site2") {
            let target = _event.target;
            target.style.color = "green";
            target.style.fontWeight = "bold";
            localStorage.setItem("chosenTopping", target.dataset.option);
            localStorage.setItem("chosenToppingImage", target.dataset.image);
        }
        if (document.querySelector("title").getAttribute("id") == "site3") {
            let target = _event.target;
            target.style.color = "green";
            target.style.fontWeight = "bold";
            localStorage.setItem("chosenService", target.dataset.option);
            localStorage.setItem("chosenServiceImage", target.dataset.image);
        }
    }
    //Anzeige Auswahl bzw. die Vorschau
    //Seite 1: Drei ???
    if (document.querySelector("title").getAttribute("id") == "site1") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let description = document.createElement("p"); // p-Element anlegen
        let text = document.createTextNode("Deine Auswahl:"); // p-Element befüllen
        description.style.fontSize = "2em";
        description.style.fontWeight = "bold";
        description.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        div.appendChild(description);
        description.appendChild(text);
        let defaultImage = document.createElement("img"); //bild anlegen
        defaultImage.src = "fragezeichen.png"; //bild aufrufen
        defaultImage.style.width = "200px";
        defaultImage.style.margin = "1em";
        div.appendChild(defaultImage);
        let defaultImage2 = document.createElement("img"); //bild anlegen
        defaultImage2.src = "fragezeichen.png"; //bild aufrufen
        defaultImage2.style.width = "200px";
        defaultImage2.style.margin = "1em";
        div.appendChild(defaultImage2);
        let defaultImage3 = document.createElement("img"); //bild anlegen
        defaultImage3.src = "fragezeichen.png"; //bild aufrufen
        defaultImage3.style.width = "200px";
        defaultImage3.style.margin = "1em";
        div.appendChild(defaultImage3);
    }
    //Seite 2: Größebild und zwei ??
    if (document.querySelector("title").getAttribute("id") == "site2") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let description = document.createElement("p"); // p-Element anlegen
        let text = document.createTextNode("Deine Auswahl:"); // p-Element befüllen
        description.style.fontSize = "2em";
        description.style.fontWeight = "bold";
        description.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        div.appendChild(description);
        description.appendChild(text);
        let savedSizeImage = document.createElement("img"); //bild anlegen
        savedSizeImage.src = localStorage.getItem("chosenSizeImage"); //bild aufrufen
        savedSizeImage.style.width = "200px";
        div.appendChild(savedSizeImage);
        let defaultImage = document.createElement("img"); //bild anlegen
        defaultImage.src = "fragezeichen.png"; //bild aufrufen
        defaultImage.style.width = "200px";
        defaultImage.style.margin = "1em";
        div.appendChild(defaultImage);
        let defaultImage2 = document.createElement("img"); //bild anlegen
        defaultImage2.src = "fragezeichen.png"; //bild aufrufen
        defaultImage2.style.width = "200px";
        defaultImage2.style.margin = "1em";
        div.appendChild(defaultImage2);
    }
    //Seite 3: Größebild, Toppingsbild und ein ?
    if (document.querySelector("title").getAttribute("id") == "site3") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let description = document.createElement("p"); // p-Element anlegen
        let text = document.createTextNode("Deine Auswahl:"); // p-Element befüllen
        description.style.fontSize = "2em";
        description.style.fontWeight = "bold";
        description.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        div.appendChild(description);
        description.appendChild(text);
        let savedSizeImage = document.createElement("img"); //bild anlegen
        savedSizeImage.src = localStorage.getItem("chosenSizeImage"); //bild aufrufen
        savedSizeImage.style.width = "200px";
        savedSizeImage.style.margin = "1em";
        div.appendChild(savedSizeImage);
        let savedToppingImage = document.createElement("img"); //bild anlegen
        savedToppingImage.src = localStorage.getItem("chosenToppingImage"); //bild speichern
        savedToppingImage.style.width = "100px";
        div.appendChild(savedToppingImage);
        let defaultImage = document.createElement("img"); //bild anlegen
        defaultImage.src = "fragezeichen.png"; //bild aufrufen
        defaultImage.style.width = "200px";
        defaultImage.style.margin = "1em";
        div.appendChild(defaultImage);
    }
    //fertige Pizza
    if (document.querySelector("title").getAttribute("id") == "site4") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let savedSizeImage = document.createElement("img"); //bild anlegen
        savedSizeImage.src = localStorage.getItem("chosenSizeImage"); //bild aufrufen
        savedSizeImage.style.width = "200px";
        div.appendChild(savedSizeImage);
        let savedToppingImage = document.createElement("img"); //bild anlegen
        savedToppingImage.src = localStorage.getItem("chosenToppingImage"); //bild speichern
        savedToppingImage.style.width = "150px";
        savedToppingImage.style.margin = "1em";
        div.appendChild(savedToppingImage);
        let savedServiceImage = document.createElement("img"); //bild anlegen
        savedServiceImage.src = localStorage.getItem("chosenServiceImage"); //bild speichern
        savedServiceImage.style.width = "150px";
        savedServiceImage.style.margin = "1em";
        div.appendChild(savedServiceImage);
    }
})(Aufgabe_2_4 || (Aufgabe_2_4 = {}));
//# sourceMappingURL=script.js.map