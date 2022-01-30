"use strict";
var Endabgabe;
(function (Endabgabe) {
    let buttonDisplay = document.getElementById("buttonDisplay");
    buttonDisplay.addEventListener("click", displayData);
    async function displayData() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        // let url: RequestInfo = "https://salinasapp.herokuapp.com";
        let url = "https://localhost:3000";
        url += "/json";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.json();
        console.log(answer);
        // document.getElementById("serverResponse").innerHTML = answer;
        let display = document.getElementById("serverResponse");
        display.innerText = JSON.stringify(answer);
        // localStorage.setItem("chosenContent", buttonDisplay.dataset.answer);
    }
    // let searchBar = document.getElementById("filter").querySelector("input");
    // searchBar.addEventListener("keyup", filter);
    // async function fetchURL(_url: RequestInfo): Promise<void> {
    //     let response: Response = await fetch(_url);
    //     console.log("Response", response);
    // }
    // // tslint:disable-next-line: typedef
    // export async function requestOneContent(_name: string) {
    //     let response: Response = await fetch("http://localhost:8100/content");
    //     let text: string = await response.text();
    //     return JSON.parse(text) as Content[];
    // }
    // export async function requestContent(): Promise<Content[]> {
    //     let response: Response = await fetch("http://localhost:8100/content");
    //     let text: string = await response.text();
    //     return JSON.parse(text) as Content[];
    // }
    // let allCats: categorie[] = [{ name: "Fleisch" }, { name: "Fisch" }, { name: "Obst" }, { name: "Gemüse" }, { name: "Pizza" }, { name: "Pommes" }];
    // function generateCategorie(_cat: categorie): HTMLElement {
    //     let div: HTMLDivElement = document.createElement("div");
    //     let button: HTMLButtonElement = document.createElement("button");
    //     let buttonText: Text = document.createTextNode(_cat.name);
    //     button.appendChild(buttonText);
    //     button.addEventListener("click", sendInfo);
    //     button.dataset.name = _cat.name;
    //     div.appendChild(button);
    //     return div;
    // }
    // generateCategorie(allCats[2]);
    //     if (document.querySelector("button").getAttribute("id") == "meat") {
    //         for (let i: number = 0; i < allCats.length; i++) {
    //             let x: HTMLElement = generateCategorie(allCats[i]);
    //             document.body.appendChild(x);
    //         }
    //     }
    //     if (document.querySelector("button").getAttribute("id") == "fish") {
    //         for (let i: number = 0; i < allCats.length; i++) {
    //             let x: HTMLElement = generateCategorie(allCats[i]);
    //             document.body.appendChild(x);
    //         }
    //     }
    //     async function sendInfo(_event: MouseEvent): Promise<void> {
    //         let target: HTMLElement = <HTMLElement>_event.target;
    //         target.style.color = "green";
    //         target.style.fontWeight = "bold";
    //         // localStorage.setItem("chosenCategorie", target.dataset.name);
    //         let url: RequestInfo = "https://salinasapp.herokuapp.com";
    //         url += "/categorie";
    //         // url = url + "?" + query.toString();
    //         let response: Response = await fetch(url);
    //         let answer: string = await response.text();
    //         console.log(answer);
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_show.js.map