// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const { print } = require('./print');
const { testConnection } = require('./connection');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

ipcMain.handle('checkConnectionStatus', (_event, printerName) => testConnection(printerName));

ipcMain.handle('sendPrint', (_event, printerName) => print(printerName));