"use strict";
async function Data(_pURL) {
    let response = await fetch(_pURL);
    console.log("Response", response);
    let formData = await response.formData();
    console.log(formData.get("fname"));
    console.log(formData.get("lname"));
    console.log(formData.get("email"));
}
Data("https://gis-example.herokuapp.com"); //Link App und Github
//# sourceMappingURL=script.js.map