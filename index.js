const Tail = require('tail').Tail;
const request = require('request');
const config = require('./config.json');

tail = new Tail(config.logFile);
tail.on("line", function(data) {
    var options = {
        text: data,
    };
    request.post(config.url, {
        body: JSON.stringify(options)
    }, function(error, response, body) {
        if (error) console.log(error);
    });
});

tail.on('error', (data)=> {
    console.log("error:", data);
});
