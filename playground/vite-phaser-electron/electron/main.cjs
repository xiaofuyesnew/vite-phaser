const { app, BrowserWindow, Menu } = require('electron')
const { join } = require('path')

Menu.setApplicationMenu(null)

const createWindow = () => {
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
