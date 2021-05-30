"use strict";
//Aufgabe 2
async function Data(_pURL) {
    let response = await fetch(_pURL);
    console.log("Response", response);
    let formData = new FormData(document.forms[0]); //neues Formelement anlegen und mit 1. Form befüllen
    //Daten per GET mit fetch senden 
    let url = "https://salinasapp.herokuapp.com";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString(); //query an url anfügen
    await fetch(url);
    formData.get("fname");
    formData.get("lname");
    formData.get("email");
}
Data("https://salinasapp.herokuapp.com");
//# sourceMappingURL=script.js.map