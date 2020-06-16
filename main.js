const { app, BrowserWindow, ipcMain } = require('electron');
var client = require('socket.engine').client;

var c = new client(addr = '127.0.0.1', port = 8080, open = true);
c.start();

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1536,
        height: 900,
        frame: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');

})


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

//Method 2: Using webContents.executeJavaScript(code,[userGesture])

// function changeInDom(user) {
//     let code = `
//     var p = document.getElementById("content_styler");
//     p.innerHTML = "I am the changed text. "+"${user}";
//     `;
//     mainWindow.webContents.executeJavaScript(code);
// }


// Method 3: Using ipcRenderer and ipcMain module

//ipcMain.on will receive the “btnclick” info from renderprocess 
ipcMain.on("btnclick", function(event, arg) {
    var url = "https://www.google.com";

    // inform the render process that the assigned task finished.
    // event.sender.send in ipcMain will return the reply to renderprocess
    event.sender.send("btnclick-task-finished", url);


});