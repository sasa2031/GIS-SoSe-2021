
namespace Aufgabe_3_2 {

    interface Person {
        [key: string]: string;
    }
    let assarray: Person = {};
    assarray["fname"] = "Salina";
    assarray["lname"] = "Weldemariam";
    assarray["email"] = "salina.weldemariam@hs-furtwangen.de";


    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", Data);
    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("JSbutton");
    buttonJSON.addEventListener("click", Data);

    async function Data(): Promise<void> {

    
    let formData: FormData = new FormData(document.forms[0]);
    console.log(":" + formData.get("name"));

    for (let entry of formData) {

        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let url: RequestInfo = "https://salinasapp.herokuapp.com";

    url = url + "?" + query.toString();
    console.log(url);


    let response: Response = await fetch(url);
    let answer: string = await response.text();
    let display: HTMLParagraphElement = <HTMLDivElement>document.getElementById("sendDataServer");
    display.innerText = answer;
}
}


