const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    frame: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('splash.html');

  setTimeout(() => {
    win.loadFile('login.html');
  }, 2500);
}

app.whenReady().then(() => {
  createWindow();
});