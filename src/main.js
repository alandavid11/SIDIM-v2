const {BrowserWindow} = require('electron');




/* async function createIdea(){
    try {
        let conn = await getConnection();
        let result = await conn.request().query('SELECT * from IdeasMejora');
        return 
        console.log(result)
    } catch (error) {
        console.log(error)
    }
    
}; */

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
    createWindow
}