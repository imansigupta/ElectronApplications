const ipcRenderer = require('electron').ipcRenderer;

const btnclick = document.getElementById('activate_button');
btnclick.addEventListener('click', function() {
    var arg = "secondparam";


    ipcRenderer.send("btnclick", arg); // ipcRender.send will pass the information to main process

});
ipcRenderer.on('btnclick-task-finished', function(event, param) {
    console.log(param)
    console.log(document.getElementById("message"))
    document.getElementById("message").innerHTML += param;

});