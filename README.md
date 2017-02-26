This is a simple Node script that reads from a log file and POSTs the content line by line to a given URL in the body as `application/json` as such:
```
{
    "text": "Lines from log file here."
}
```

This was designed for a Slack webhook, but can be easily ported to other applications. Therefore it also requires a `config.json` to get the URL:
```
{
    "url": "http://example.com/webhook/1",
    "logFile": "/absolute/path/to/log/file"
}
```

I use PM2 to keep the script running on my server. See PM2 documentation for details on running Node scripts.


A word of caution when using this script with Slack: they limit incoming webhook messages at a frequency of no more than one message per second. If your log file has high frequency/significant amount of output, this script may not be suitable for your usage. I've designed the script such that it sends a message only when it is approaching 4000 characters in length, to limit message spamming and make full use of Slack's maximum size JSON request.
