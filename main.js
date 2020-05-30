const { app, BrowserWindow } = require('electron');
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
})