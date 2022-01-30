"use strict";
var Endabgabe;
(function (Endabgabe) {
    let button = document.getElementById("button");
    button.addEventListener("click", saveData);
    async function saveData() {
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
    // async function displayData(): Promise<void> {
    //     let formData: FormData = new FormData(document.forms[0]);
    //     // tslint:disable-next-line: no-any
    //     let query: URLSearchParams = new URLSearchParams(<any>formData);
    //     // let url: RequestInfo = "https://salinasapp.herokuapp.com";
    //     let url: RequestInfo = "https://localhost:3000";
    //     url += "/insert";
    //     url = url + "?" + query.toString();
    //     let response: Response = await fetch(url);
    //     let answer: string = await response.text();
    //     console.log(answer);
    //     // document.getElementById("serverResponse").innerHTML = answer;
    //     let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverResponse");
    //     display.innerText = answer;
    //     // localStorage.setItem("chosenContent", buttonDisplay.dataset.answer);
    // }
    // tslint:disable-next-line: typedef
    let today = new Date();
    // tslint:disable-next-line: typedef
    let day = today.toLocaleDateString();
    document.getElementById("date").innerHTML = "Anlegedatum: " + "" + day;
    // interface Content {
    //     name: string;
    //     expire: string;
    //     categorie: string;
    // }
    // let myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myForm");
    // myForm.addEventListener("submit", displayForm);
    // async function displayForm(_event: Event) {
    //     _event.preventDefault();
    //     let formData: FormData = new FormData(<HTMLFormElement>_event.currentTarget);
    // let content: Content = {
    //     name: formData.get("name"),
    //     expire: formData.get("expire"),
    //     categorie: formData.get("categorie")
    // };
    // console.log(content);
    // }
})(Endabgabe || (Endabgabe = {}));
// async function editForm(_event: MouseEvent) {
//     let target: HTMLElement = <HTMLElement>_event.target;
//     let content: Content[] = (await requestOneContent(target.dataset.name));
// }
// async function displayForm(_form: HTMLFormElement) {
//     let forms: Content[] = await requestContent();
//     for (let ingredients of forms) {
//         let fr: HTMLFormElement = <HTMLFormElement>document.getElementById("result");
//         fr.dataset.name = fr.name;
//         let div: HTMLDivElement = document.createElement("div");
//         fr.appendChild(div);
//     }
// }
//# sourceMappingURL=script.js.map