const fs = require('fs');
const os = require('os');
const queryString = require('querystring');

function start(res){
    let body = '<head> <meta charset="UTF-8"/></head>'
    body += '<body><div> Hello, start!@ <br> I am in the cloud class. </div><br>';
    body += '<div> <a href="/hello"> hello 페이지 </a> </div>';
    body += '<div> <a href="/wait"> 5초 대기 페이지 </a> </div>';
    body += '<div> <a href="/randomWait"> 무작위 대기 페이지 </a> </div>';
    body += '<div> <a href="/firstHtml"> 파일 read 첫번째 페이지 </a> </div>';
    body += '<div> <a href="/page"> 핸들러없이 자동매핑 </a> </div>';
    body += '<div> <a href="/serverInfo"> 서버정보 </a> </div>';
    body += '<div> <a href="/form"> Form 입력 페이지 </a> </div>';
    body += '<div> <a href="/nickname"> Form으로 넘어온 이름과 별명 표시 페이지 </a> </div>';
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

function randomWait(res){
    let waitTime = Math.round(Math.random()*10000)
    setTimeout(function(){
        let sBody = 'Thank you for waitng for' + waitTime + 'ms!';
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(sBody);
        res.end();
    }, waitTime);
}

function htmlFile(res, file){
    body = fs.readFileSync(file, 'utf-8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function firstHtml(res){
    htmlFile(res, './firstHtml.html');
}

function serverInfo(res){
   info = JSON.stringify(os.cpus());
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(info);
   res.end();
}

function nickname(res, postData){
    let body = '<head> <meta charset="UTF-8"/></head>';
    body += '<body><div>안녕하세요,' + queryString.parse(postData).myName + '님. </div>';
    body += '<div>당신의 별명은,' + queryString.parse(postData).myNick + '입니다. </div>';
    body += '<body/>'

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

exports.start = start;
exports.hello = hello;
exports.wait = wait;
exports.randomWait = randomWait;
exports.firstHtml = firstHtml;
exports.htmlFile = htmlFile;
exports.serverInfo = serverInfo;