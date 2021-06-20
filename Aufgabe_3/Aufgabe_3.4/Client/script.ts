
namespace Aufgabe_3_4 {

    interface Person {

        
        name: string;
        email: string;
        message: string;
    }

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", sendData);
    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJS");
    buttonJSON.addEventListener("click", dataJson);
    let buttonDelete: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonDelete");
    buttonDelete.addEventListener("click", deleteData);


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

    
    async function dataJson(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://salinasapp.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";
        
        url += "/json";
        
        url = url + "?" + query.toString();
        
        
        let response: Response = await fetch(url);
        
        let answer: Person = await response.json();
        console.log(answer);
        
        
        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverResponse");
        display.innerText = JSON.stringify(answer);
        
    }

    async function deleteData(): Promise<void> {
    
        let formData: FormData = new FormData(document.forms[0]);
    
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://salinasapp.herokuapp.com";
        // let url: RequestInfo = "http://localhost:8100";
    
        url += "/delete";
    
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
    }
}