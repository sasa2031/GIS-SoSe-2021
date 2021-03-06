
namespace Aufgabe_3_2 {

    interface Person {
        [key: string]: string;
    }


    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", DataHTML);
    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("JSbutton");
    buttonJSON.addEventListener("click", DataJSON);

    async function DataHTML(): Promise<void> {


        let formData: FormData = new FormData(document.forms[0]);
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://salinasapp.herokuapp.com";
        url += "/html";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let answer: string = await response.text();
        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("sendDataServer");
        display.innerText = answer;
    }

    async function DataJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://salinasapp.herokuapp.com";
        url += "/json";

        url = url + "?" + query.toString();


        let response: Response = await fetch(url);
        
        let myJSON: Person = await response.json();
        console.log(myJSON);
        
    }
}



