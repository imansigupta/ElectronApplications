var client = require('socket.engine').client;

var c = new client(addr = '127.0.0.1', port = 8080, open = true);
c.start();

c.on("Test", (data) => {
    console.log(data);
    c.msgBuffer = ''

});

c.write("Test", "Hello there!");