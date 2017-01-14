This is a simple Node script that reads from a Minecraft Server's log file and POSTs
the content line by line to a given URL in the body as `application/json` as such:
```
{
    'text': 'Line from log file appears here.'
}
```

This is meant to be used with a Slack webhook, but can be easily ported to other applications. Therefore
it also requires a `config.json` to get the URL:
```
{
    'url': 'http://example.com/webhook/1'
}
```
