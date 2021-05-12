const myServer = require('./MyServer');
const myRouter = require('./MyRouter');
const myHandler = require('./MyHandler');

let handle = {};
handle['/'] = myHandler.start;
handle['/hello'] = myHandler.hello;
handle['/wait'] = myHandler.wait;
handle['/randomWait'] = myHandler.randomWait;
handle['/firstHtml'] = myHandler.firstHtml;




myServer.start(myRouter.route, handle);