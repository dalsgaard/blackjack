
var conn = new WebSocket('ws://localhost:8270');
console.log(conn);
conn.send("Foo!");
