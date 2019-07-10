// Load HTTP library
var http = require("http"), fs = require('fs');
var credentials = require("./credentials");

// Create HTTP server to handle responses
http.createServer(function(request, response) {
    fs.readFile('public/index.html', function(err, data) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        console.log(credentials);
        response.end();
    });
}).listen(8888);
