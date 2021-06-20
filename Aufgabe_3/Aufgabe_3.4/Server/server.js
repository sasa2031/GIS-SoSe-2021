"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_4 = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var Aufgabe_3_4;
(function (Aufgabe_3_4) {
    // interface Form {
    //     name: string;
    //     email: string;
    //     date: string;
    // }
    let forms;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let dataBaseURL = "mongodb+srv://salinascluster_2021:Tc6CuFguXqWQ8gu@salinascluster.mbztz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Starting Server");
        server.listen(_port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    startServer(port);
    async function connectDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        forms = mongoClient.db("test").collection("people");
        let remove = mongoClient.db("test").collection("Aufgabe_3.4");
        remove.drop();
        console.log("Database connection ", forms != undefined);
    }
    connectDB(dataBaseURL);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        let url = Url.parse(_request.url, true);
        if (url.pathname == "/insert") {
            forms.insertOne(url.query);
        }
        // if (url.pathname == "/find") {
        //     forms.findOne({"name": url.query ["name"], "E-Mail": url.query ["email"], "Nachricht": url.query ["message"]});
        // }
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        if (url.pathname == "/delete") {
            forms.deleteOne({ "name": url.query["name"], "E-Mail": url.query["email"], "Nachricht": url.query["message"] });
        }
        _response.end();
    }
})(Aufgabe_3_4 = exports.Aufgabe_3_4 || (exports.Aufgabe_3_4 = {}));
//# sourceMappingURL=server.js.map