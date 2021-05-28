"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
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
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); //Anfrage mit localhost:8100/hhuicjsl senden
        _response.end();
        console.log(_request.url); //Anfrage hier: /hhuicjsl, in Server Konsole ausgegeben
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map