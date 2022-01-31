import * as Mongo from "mongodb";
import * as Http from "http";
import * as Url from "url";

export namespace Endabgabe {

    let forms: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    if (!port) {
        port = 3000;
    }
    let hostname: string = "127.0.0.1";

    let dataBaseURL: string = "mongodb+srv://salinascluster_2021:Tc6CuFguXqWQ8gu@salinascluster.mbztz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    function startServer(_port: string | number, _hostname: string): void {
        let server: Http.Server = Http.createServer();
        console.log("Starting Server");

        server.listen(_port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    startServer(port, hostname);


    async function connectDB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        forms = mongoClient.db("freezer").collection("content");


        console.log("Database connection ", forms != undefined);
    }
    connectDB(dataBaseURL);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

        if (url.pathname == "/insert") {


            forms.insertOne(url.query);

        }
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json");

            let jsonString: string = JSON.stringify(url.query);


            _response.write(jsonString);


        }

        _response.end();
    }
}