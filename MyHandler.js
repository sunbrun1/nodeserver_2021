function start(res){
    const sBody = 'Hello, start!@';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(sBody);
    res.end();
}

function hello(res){
    const sBody = 'this is hello';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(sBody);
    res.end();
}

exports.start = start;
exports.hello = hello;