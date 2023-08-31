const { app, BrowserWindow, Menu } = require('electron')
const { join } = require('path')

const createWindow = () => {
  Menu.setApplicationMenu(null)

  const win = new BrowserWindow({
    width: 810,
    height: 636,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: join(__dirname, './preload.js')
    }
  })

  if (app.isPackaged) {
    win.loadFile('dist/index.html')
  } else {
    win.loadURL('https://localhost:5173')
  }

  // uncomment below to open the DevTools
  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
