

namespace Endabgabe {

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");

    if (button) {
        button.addEventListener("click", sendData);
    }
    let buttonDisplay: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonDisplay");
    if (buttonDisplay) {

        buttonDisplay.addEventListener("click", storage);
    }
    let buttonShow: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonShow");
    if (buttonShow) {

        buttonShow.addEventListener("click", displayData);
    }

    async function sendData(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://salinasapp.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";

        url += "/insert";

        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);

    }

    export interface Content {

        name: string;
        expire: string;
        message: string;
        categorie: string;
    }

    async function storage(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://salinasapp.herokuapp.com";
        // let url: RequestInfo = "https://localhost:3000";

        url += "/json";

        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let answer: Content = await response.json();
        console.log(answer);

        
        localStorage.setItem("chosenContent", JSON.stringify(answer));
    }

    function displayData(): void {
        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverResponse");

        display.innerHTML = localStorage.getItem("chosenContent");

    }

    // tslint:disable-next-line: typedef
    let today = new Date();
    // tslint:disable-next-line: typedef
    let day = today.toLocaleDateString();
    document.getElementById("date").innerHTML = "Anlegedatum: " + "" + day;


}














