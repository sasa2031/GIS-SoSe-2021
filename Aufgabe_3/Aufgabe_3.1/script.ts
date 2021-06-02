
namespace P_3_1 {


    //Aufgabe 2

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", Data);


    async function Data(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        console.log(":" + formData.get("fname"));

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

        console.log(answer);
    }
}
