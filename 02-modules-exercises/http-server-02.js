let http = require('http');
http.createServer(function (req, res) {
        let bodyJson = {
        "Greeting": "hello from server'"
        }
        // Convert JSON object to string
        let jsonString = JSON.stringify(bodyJson);
        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(jsonString), // Calcular la longitud en bytes de la cadena JSON
            'Content-Type': 'application/json' // Usar el tipo de contenido adecuado para JSON
        });    //write a response to the client
        res.end(jsonString); //end of response from server
}).listen(6001);//the server instance listens fir http request on port 6000