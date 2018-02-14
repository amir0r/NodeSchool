const ws = require('websocket-stream')

ws('ws://localhost:8099').end("hello\n")
