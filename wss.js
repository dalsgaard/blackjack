var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8270});

wss.on('connection', function(ws) {
  console.log('connected!');
  ws.on('message', function(message) {
    console.log('received: %s', message);
  });
  ws.send('something');
});