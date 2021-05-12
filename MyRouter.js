const fs = require('fs');
const myHandler = require('./MyHandler')
function route(pathname, handle, res, postData) {
    console.log('Routing request for' + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](res,postData);
    }
    else{
        pathFile = '.' + pathname + '.html' // ex) ./page.html
        if(fs.existsSync(pathFile)){
            console.log(pathFile + "is found.");
            myHandler.htmlFile(res, pathFile);
        }
        else{
            console.log("404 Not Found" + pathname);
            const sBody = 'error 404';
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(sBody);
            res.end();
        }
    }
}

exports.route = route;