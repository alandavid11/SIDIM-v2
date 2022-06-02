const {BrowserWindow} = require('electron');
const {getConnection} = require('./database')

function createIdea(idea) {
    const conn = getConnection();
    console.log(idea);
}

let window

function createWindow() {
    window = new BrowserWindow({
        width: 700,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
           
        },
    });
    window.loadFile('src/index.html');
};

module.exports = {
    createWindow,
    createIdea
}