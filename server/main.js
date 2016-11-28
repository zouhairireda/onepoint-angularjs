const appServer = require('./frontend');
const apiServer = require('./backend');

const PORT = 8080;

apiServer(PORT - 1);
appServer(PORT);