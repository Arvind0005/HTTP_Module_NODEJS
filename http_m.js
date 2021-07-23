var http = require('http');
var url = require('url');

var httpserver = http.createServer(function (request,response)
{
    var pathname = url.parse(request.url).pathname;
    switch(pathname)
    {
        case '/' :
            console.log("there is an request");
            response.write("a request");
            break;
        case '/hii':
            console.log('hii');
            response.write("hello");
            break;
        default:
            console.log(pathname);
            console.log("default");
            break;
    }
    
});
httpserver.listen(8001);