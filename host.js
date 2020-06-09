var host = require('socket.engine').host;

var h = new host(addr = '127.0.0.1', port = 8080, open = true);
h.start();


h.on("Test", (data) => {

    console.log("sending data");
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question('isFirst ', (d) => {

        h.write_ALL("Test", { 'isFirst': d, 'user': "Coded By Mansi Gupta" });
        readline.close()
    })


    console.log(data);



});