const {BrowserWindow} = require('electron')

let window

function createWindow() {
    window = new BrowserWindow({
        width: 700,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })
    window.loadFile('src/index.html');
}

module.exports = {
    createWindow
}