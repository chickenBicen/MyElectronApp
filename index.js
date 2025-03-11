const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  let mainWindow = new BrowserWindow({
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
