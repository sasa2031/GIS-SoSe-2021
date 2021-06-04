import * as Http from "http";
import * as Url from "url";


export namespace Aufgabe_3_2 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100; //port wie ein hafen -> hier soll nummer 8100 verwendet werden

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);      //wie EventListener, horcht auf wenn request reinkommt
    server.addListener("listening", handleListen);
    server.listen(port); //führt handleListen aus wenn localhost:8100

    function handleListen(): void {
        console.log("Listening"); //"Listening" in Server Konsole ausgegeben
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //wird in Server Konsole ausgegeben
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); //Anfrage mit localhost:8100/hhuicjsl senden
        _response.end();


        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);


        if (url.pathname == "https://salinasapp.herokuapp.com/html") {
            _response.setHeader("content-type", "text/html; charset=utf-8");

            for (let key in url.query) {

                _response.write(key + ":" + url.query[key]);


            }
        }

        if (url.pathname == "https://salinasapp.herokuapp.com/json") {
            _response.setHeader("content-type", "application/json");

            let jsonString: string = JSON.stringify(url.pathname);

            console.log(jsonString);

        }

    }
}



