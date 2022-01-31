"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var Endabgabe;
(function (Endabgabe) {
    let forms;
    let port = Number(process.env.PORT);
    if (!port) {
        port = 3000;
    }
    let hostname = "127.0.0.1";
    let dataBaseURL = "mongodb+srv://salinascluster_2021:Tc6CuFguXqWQ8gu@salinascluster.mbztz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    function startServer(_port, _hostname) {
        let server = Http.createServer();
        console.log("Starting Server");
        server.listen(_port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    startServer(port, hostname);
    async function connectDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        forms = mongoClient.db("freezer").collection("content");
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
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map