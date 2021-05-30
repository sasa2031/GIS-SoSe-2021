
//Aufgabe 2
async function Data(_pURL: RequestInfo): Promise<void> {
    let response: Response = await fetch(_pURL);
    console.log("Response", response);
    let formData: FormData = new FormData(document.forms[0]); //neues Formelement anlegen und mit 1. Form befüllen

    //Daten per GET mit fetch senden 
    let url: string = "https://salinasapp.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>formData); 
    url = url + "?" + query.toString(); //query an url anfügen
    await fetch(url);

    formData.get("fname");
    formData.get("lname");
    formData.get("email");
}

Data("https://salinasapp.herokuapp.com");


