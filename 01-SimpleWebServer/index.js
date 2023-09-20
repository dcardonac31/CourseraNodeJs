var http = require('http');
let server = http.createServer(function(request, response){
    let body = "Hello world!!!";
    let bodyJson = {
        "Greeting": "Hello World!!!"
    }

    // Convert JSON object to string
    let jsonString = JSON.stringify(bodyJson);

    //Response text/plain
    // response.writeHead(200, {
    //     'Content-Length': body.length,
    //     'Content-Type':'text/plain'
    // });

    // response.end(body);
    
    response.writeHead(200, {
        'Content-Length': Buffer.byteLength(jsonString), // Calcular la longitud en bytes de la cadena JSON
        'Content-Type': 'application/json' // Usar el tipo de contenido adecuado para JSON
    });   

    response.end(jsonString);
});

server.listen(8080);