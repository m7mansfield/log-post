const Tail = require('tail').Tail;
const request = require('request');
const config = require('./config.json');

var body = '';

tail = new Tail(config.logFile);

tail.on('line', function(data) {
    if((body.length + data.length) > 3980) {
        var options = {
            text: body,
        };
        request.post(config.url, {
            body: JSON.stringify(options)
        }, function(error, response, body) {
            if (error) console.log(error);
        });
        body = '';
    }
    body += data;
});

tail.on('error', (data)=> {
    console.log('error:', data);
});
