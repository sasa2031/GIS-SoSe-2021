 

    async function Data(_pURL: RequestInfo): Promise<void> {
        let response: Response = await fetch(_pURL);
        console.log("Response", response);
        let formData: FormData = await response.formData();
        console.log(formData.get("fname"));
        console.log(formData.get("lname"));
        console.log(formData.get("email"));
    }
   
    Data("https://gis-example.herokuapp.com"); //Link App und Github

   
