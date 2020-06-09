const { app, BrowserWindow } = require('electron');
var client = require('socket.engine').client;

var c = new client(addr = '127.0.0.1', port = 8080, open = true);
c.start();

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1536,
        height: 900,
        frame: false,
        webPreferences: {
            nodeIntegration: false
        }
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    c.on("Test", (data) => {
        c.msgBuffer = ''
        var isFirst = data["isFirst"];
        console.log(data)
        var user = data['user'];

        if (isFirst == 'True') {
            changeInDom(user);
        }


    });
    c.write("Test", "Hello there!");

    function changeInDom(user) {
        let code = `
        var p = document.getElementById("content_styler");
        p.innerHTML = "I am the changed text. "+"${user}";
        `;
        mainWindow.webContents.executeJavaScript(code);

    }

})