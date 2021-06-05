"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_2 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe_3_2;
(function (Aufgabe_3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //port wie ein hafen -> hier soll nummer 8100 verwendet werden
    let server = Http.createServer();
    server.addListener("request", handleRequest); //wie EventListener, horcht auf wenn request reinkommt
    server.addListener("listening", handleListen);
    server.listen(port); //führt handleListen aus wenn localhost:8100
    function handleListen() {
        console.log("Listening"); //"Listening" in Server Konsole ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //wird in Server Konsole ausgegeben
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        // _response.write(_request.url); //Anfrage mit localhost:8100/hhuicjsl senden
        let url = Url.parse(_request.url, true);
        if (url.pathname == "/html") {
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key]);
            }
        }
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            let jsonString = JSON.stringify(url.query);
            console.log(jsonString);
            _response.write(jsonString);
        }
        _response.end();
    }
})(Aufgabe_3_2 = exports.Aufgabe_3_2 || (exports.Aufgabe_3_2 = {}));
//# sourceMappingURL=server.js.map