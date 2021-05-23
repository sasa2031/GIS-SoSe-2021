namespace Aufgabe_2_5 { 



    //Anzeige der Bilder auf der jeweiligen Seite

    //b)
    async function generatePizzapart(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let obj: Pizza = await response.json();

        currentPage(obj);
    }

    generatePizzapart("https://sasa2031.github.io/GIS-SoSe-2021/Aufgabe_2/Aufgabe_2.5/data.json");


    //auf welcher Seite wir uns befinden und Anzeige der Optionen
    function currentPage(_part: Pizza): void {

        if (document.querySelector("title").getAttribute("id") == "site1") {
            for (let i: number = 0; i < _part.groesse.length; i++) {
                let x: HTMLElement = generate(_part.groesse[i]);
                document.body.appendChild(x);


            }
        }

        if (document.querySelector("title").getAttribute("id") == "site2") {
            for (let i: number = 0; i < _part.toppings.length; i++) {

                let x: HTMLElement = generate(_part.toppings[i]);

                document.body.appendChild(x);


            }
        }
        if (document.querySelector("title").getAttribute("id") == "site3") {
            for (let i: number = 0; i < _part.service.length; i++) {
                let x: HTMLElement = generate(_part.service[i]);

                document.body.appendChild(x);



            }
        }
    }

    function generate(_part: Pizzapart): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        let image: HTMLImageElement = document.createElement("img");
        image.src = _part.image;
        image.style.width = "250px";
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        let buttonText: Text = document.createTextNode(_part.option);
        button.appendChild(buttonText);
        button.addEventListener("click", storage);
        button.dataset.option = _part.option;
        button.dataset.image = _part.image;

        div.appendChild(button);

        return div;

    }

    //Abspeichern der ausgewählten Bilder
    function storage(_event: MouseEvent): void {
        if (document.querySelector("title").getAttribute("id") == "site1") {
            let target: HTMLElement = <HTMLElement>_event.target;
            target.style.color = "green";
            target.style.fontWeight = "bold";
            localStorage.setItem("chosenSize", target.dataset.option);
            localStorage.setItem("chosenSizeImage", target.dataset.image);
        }

        if (document.querySelector("title").getAttribute("id") == "site2") {
            let target: HTMLElement = <HTMLElement>_event.target;
            target.style.color = "green";
            target.style.fontWeight = "bold";
            localStorage.setItem("chosenTopping", target.dataset.option);
            localStorage.setItem("chosenToppingImage", target.dataset.image);

        }

        if (document.querySelector("title").getAttribute("id") == "site3") {
            let target: HTMLElement = <HTMLElement>_event.target;
            target.style.color = "green";
            target.style.fontWeight = "bold";
            localStorage.setItem("chosenService", target.dataset.option);
            localStorage.setItem("chosenServiceImage", target.dataset.image);

        }


    }

    //Anzeige Auswahl bzw. die Vorschau

    // Seite 1: Drei ???
    if (document.querySelector("title").getAttribute("id") == "site1") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let description: HTMLElement = document.createElement("p"); // p-Element anlegen
        let text: Text = document.createTextNode("Deine Auswahl:"); // p-Element befüllen
        description.style.fontSize = "2em";
        description.style.fontWeight = "bold";
        description.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";

        div.appendChild(description);
        description.appendChild(text);

        let defaultImage: HTMLImageElement = document.createElement("img"); //bild anlegen
        defaultImage.src = "images/fragezeichen.png"; //bild aufrufen
        defaultImage.style.width = "100px";
        defaultImage.style.margin = "1em";
        div.appendChild(defaultImage);

        let defaultImage2: HTMLImageElement = document.createElement("img"); //bild anlegen
        defaultImage2.src = "images/fragezeichen.png"; //bild aufrufen
        defaultImage2.style.width = "100px";
        defaultImage2.style.margin = "1em";
        div.appendChild(defaultImage2);

        let defaultImage3: HTMLImageElement = document.createElement("img"); //bild anlegen
        defaultImage3.src = "images/fragezeichen.png"; //bild aufrufen
        defaultImage3.style.width = "100px";
        defaultImage3.style.margin = "1em";

        div.appendChild(defaultImage3);
    }


    //Seite 2: Größebild und zwei ??
    if (document.querySelector("title").getAttribute("id") == "site2") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let description: HTMLElement = document.createElement("p"); // p-Element anlegen
        let text: Text = document.createTextNode("Deine Auswahl:"); // p-Element befüllen
        description.style.fontSize = "2em";
        description.style.fontWeight = "bold";
        description.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";

        div.appendChild(description);
        description.appendChild(text);

        let savedSizeImage: HTMLImageElement = document.createElement("img"); //bild anlegen
        savedSizeImage.src = localStorage.getItem("chosenSizeImage"); //bild aufrufen
        savedSizeImage.style.width = "200px";
        div.appendChild(savedSizeImage);

        let defaultImage: HTMLImageElement = document.createElement("img"); //bild anlegen
        defaultImage.src = "images/fragezeichen.png"; //bild aufrufen
        defaultImage.style.width = "100px";
        defaultImage.style.margin = "1em";

        div.appendChild(defaultImage);

        let defaultImage2: HTMLImageElement = document.createElement("img"); //bild anlegen
        defaultImage2.src = "images/fragezeichen.png"; //bild aufrufen
        defaultImage2.style.width = "100px";
        defaultImage2.style.margin = "1em";
        div.appendChild(defaultImage2);

    }

    //Seite 3: Größebild, Toppingsbild und ein ?
    if (document.querySelector("title").getAttribute("id") == "site3") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let description: HTMLElement = document.createElement("p"); // p-Element anlegen
        let text: Text = document.createTextNode("Deine Auswahl:"); // p-Element befüllen
        description.style.fontSize = "2em";
        description.style.fontWeight = "bold";
        description.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";

        div.appendChild(description);
        description.appendChild(text);
        let savedSizeImage: HTMLImageElement = document.createElement("img"); //bild anlegen
        savedSizeImage.src = localStorage.getItem("chosenSizeImage"); //bild aufrufen
        savedSizeImage.style.width = "200px";
        savedSizeImage.style.margin = "1em";
        div.appendChild(savedSizeImage);

        let savedToppingImage: HTMLImageElement = document.createElement("img"); //bild anlegen
        savedToppingImage.src = localStorage.getItem("chosenToppingImage"); //bild speichern
        savedToppingImage.style.width = "100px";

        div.appendChild(savedToppingImage);

        let defaultImage: HTMLImageElement = document.createElement("img"); //bild anlegen
        defaultImage.src = "images/fragezeichen.png"; //bild aufrufen
        defaultImage.style.width = "100px";
        defaultImage.style.margin = "1em";
        div.appendChild(defaultImage);




    }

    //fertige Pizza
    if (document.querySelector("title").getAttribute("id") == "site4") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let savedSizeImage: HTMLImageElement = document.createElement("img"); //bild anlegen
        savedSizeImage.src = localStorage.getItem("chosenSizeImage"); //bild aufrufen
        savedSizeImage.style.width = "200px";
        div.appendChild(savedSizeImage);

        let savedToppingImage: HTMLImageElement = document.createElement("img"); //bild anlegen
        savedToppingImage.src = localStorage.getItem("chosenToppingImage"); //bild speichern
        savedToppingImage.style.width = "150px";
        savedToppingImage.style.margin = "1em";
        div.appendChild(savedToppingImage);

        let savedServiceImage: HTMLImageElement = document.createElement("img"); //bild anlegen
        savedServiceImage.src = localStorage.getItem("chosenServiceImage"); //bild speichern
        savedServiceImage.style.width = "150px";
        savedServiceImage.style.margin = "1em";
        div.appendChild(savedServiceImage);

        
        //c)
        async function sendData(_url: RequestInfo): Promise<void> {
            let query: URLSearchParams = new URLSearchParams(localStorage);
            console.log(query.toString());

            _url = _url + "?" + query.toString();
            let response: Response = await fetch(_url);
            let result: ServerAnswer = await response.json();
            let display: HTMLDivElement = <HTMLParagraphElement>document.getElementById("serverResponse");
            if (result.error) {
                display.className = "Error";
                display.innerText = result.error;
                display.style.color = "chartreuse";
            }
            else {
                display.className = "Message";
                display.innerText = result.message;
                display.style.color = "darkblue";

            }

        }

        sendData("https://gis-communication.herokuapp.com");
    }
}






















