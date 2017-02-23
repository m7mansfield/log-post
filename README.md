This is a simple Node script that reads from a log file and POSTs
the content line by line to a given URL in the body as `application/json` as such:
```
{
    "text": "Line from log file appears here."
}
```

This was designed for a Slack webhook, but can be easily ported to other applications. Therefore
it also requires a `config.json` to get the URL:
```
{
    "url": "http://example.com/webhook/1",
    "logFile": "/absolute/path/to/log/file"
}
```

I use PM2 to keep the script running on my server. See PM2 documentation for details on running Node scripts.

MIT License
Copyright (c) 2017 Michael Mansfield
