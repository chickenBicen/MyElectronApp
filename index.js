const { app, BrowserWindow } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: "assets/icon.ico",
  });

  mainWindow.loadFile("mainScreen.html");

  mainWindow.setMenuBarVisibility(false);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
