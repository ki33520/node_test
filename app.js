var http = require('http');
var requirejs = require('requirejs');

http.createServer(function (request, response) {
  response.end('Hello World\n');
}).listen(3030);

console.log('Server running at http://127.0.0.1:3030/');