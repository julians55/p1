
const express = require('express');
const http = require('http');
const math = require('mathjs');
const configExpress = require('./config/express');
const app = express();
var serialNumber = require('serial-number');
const server = http.Server(app);

app.use(express.urlencoded({extended: false}));
configExpress(app);

const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
    
    serialNumber(function (err, value) {
        res.send("asdf"+math.evaluate('1.2 * (2 + 4.5)') +value);
    });
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
    serialNumber(function (err, value) {
        console.log(value);
    });
  })
