const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var path = require('path');

console.log("starting");
mongoose.connect('mongodb://localhost:27017').then(() => console.log('mongoDB connected...')
).catch((ex) => console.log(`Error while connecting ${ex}`));


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/Members', require('./routs/member.routs'));

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var connection = require('./connections');
app.listen(port, () => {
    console.log('port running in ' + port);
});

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('dsclenvuiwerasiHello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });