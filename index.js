const myServer = require('./MyServer');
const myRouter = require('./MyRouter');

myServer.start(myRouter.route);