const {app,BrowserWindow,globalShortcut} = require('electron')
let mainWindow
let window={
  width: 800,     //窗口宽度
  height: 600,    //窗口高度
  frame: false,    //是否显示窗口工具栏
}
function createWindow () {
  var isBig = true;
  mainWindow = new BrowserWindow(window);
  mainWindow.loadFile('app/index.html');
  // mainWindow.webContents.openDevTools(); //开启调试工具
  mainWindow.setFullScreen(isBig);   //全屏显示
  globalShortcut.register('ESC', () => { //esc退出全屏
    if (isBig == true) {
      mainWindow.setFullScreen(false);
      isBig = false
    }else{
      app.quit()
    }
  })
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
//打包
//electron-packager . HelloWorld --win --out ./HelloWorldApp --arch=x64 --electron-version=3.0.0