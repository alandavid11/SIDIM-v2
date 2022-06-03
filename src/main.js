const {BrowserWindow} = require('electron');
const {getConnection} = require('./database')

async function createIdea(idea) {
    try {
        const conn = await getConnection();
        idea.NumEmpleado = parseFloat(idea.NumEmpleado)
        const result = await conn.query('INSERT INTO IdeasMejora SET ', idea)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
    
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