const appServer = require('./frontend');
const apiServer = require('./backend');

const PORT = 8080;

apiServer(PORT - 1);
appServer(PORT);

console.log('Dev server started on http://localhost:8080');