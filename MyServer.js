const http = require('http');
const url = require('url')
const hostname = "localhost";
const port = 8000;
const baseUrl = 'http://' + hostname +  ':' + port;

function start(route, handle) {
    function onRequset(req, res){
        console.log('Request receive');
        pathname = new url.URL(req.url,baseUrl).pathname;

        let postData = '';
        req.setEncoding('utf-8');

        req.addListener('data', function(chunk){
            postData += chunk;
            console.log('chunk:' + postData);
        });

        req.addListener('end', function(){
            route(pathname, handle, res, postData);
        });
    }
    server = http.createServer(onRequset);
    server.listen(port,hostname);
    console.log('Server is running at' + baseUrl);
}

exports.start = start;