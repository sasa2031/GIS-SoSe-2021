namespace Endabgabe {

    let deleteButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("deleteButton");
    deleteButton.addEventListener("click", deleteData);

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