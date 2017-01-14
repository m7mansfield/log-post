const Tail = require('tail').Tail;
const http = require('http');
const config = require('./config.json');

tail = new Tail(config.logFile);
tail.on("line", function(data) {
    var options = {
        url: config.url,
        method: 'POST',
        body: data
    };
    http.request(options, function(error, response, body) {
        if (error) console.log(error);
    });
});

tail.on('error', (data)=> {
    console.log("error:", data);
});
