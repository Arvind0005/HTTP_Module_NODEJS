var http = require('http');

var httpserver = http.createServer(function (request,response)
{
    console.log("there is an request");
    response.write("a request");
});
httpserver.listen(8001);