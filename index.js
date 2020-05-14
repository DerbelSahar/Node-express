const express = require('express');
const hostname = 'localhost';
const port = 3000;
const app = express();
const http = require('http');
app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Thisis an Express Server</h1></body></html>');

});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log('server running');
});