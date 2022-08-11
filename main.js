const {app, BrowserWindow, ipcMain} = require('electron')


let win = null
let count = 1
const createWindow = () => {
    win = new BrowserWindow({
        width:700,
        height: 500,
        resizable:true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:false
        }
    })
    win.loadFile("index.html")
}
app.whenReady().then(createWindow);
ipcMain.on('generatePassword', (event, data) => {
    const randomPassword = data + Math.random().toString(36).substring(1,6)
    win.webContents.send('receivePassword',randomPassword,count++)

})

