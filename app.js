
const express = require('express');
const http = require('http');

const configExpress = require('./config/express');
const app = express();
var serialNumber = require('serial-number');
const server = http.Server(app);

app.use(express.urlencoded({extended: false}));
configExpress(app);

const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
    
    serialNumber(function (err, value) {
        res.send("asdf"+value);
    });
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
    serialNumber(function (err, value) {
        console.log(value);
    });
  })
