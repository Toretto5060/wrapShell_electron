># 启动
 npm run start  调试启动
>#打包apk
      electron-packager <应用目录> <应用名称> <打包平台> --out <输出目录> <架构> <应用版本>

  el::electron-packager . HelloWorld --win --out ../HelloWorldApp --arch=x64 --version=0.0.1 --electron-version=1.4.13