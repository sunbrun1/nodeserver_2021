function start(res){
    let body = '<head> <meta charset="UTF-8"/></head>'
    body += '<body><div> Hello, start!@ <br> I am in the cloud class. </div><br>';
    body += '<div> <a href="\hello"> hello 페이지 </a> </div>';
    body += '<div> <a href="\wait"> 5초 대기 페이지 </a> </div>';
    body += '</body>'
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function hello(res){
    let sBody = 'this is hello';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(sBody);
    res.end();
}

function wait(res){
    setTimeout(function(){
        let sBody = 'Thank you for waitng for 5 sec!';
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(sBody);
        res.end();
    }, 5000);
    

}

exports.start = start;
exports.hello = hello;
exports.wait = wait;