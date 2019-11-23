const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    baseUrl: '/', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    //本地服务需要代理转发一下处理跨域的问题
    devServer:{
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: {
        '/api': {
            target: 'https://c.y.qq.com/',//设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': '' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'https://api.douban.com/user/add'，直接写‘/api/user/add’即可，此处的‘api’可以设置为自己想要设置的任何词语，符合规范即可
                }
            }  
        }
    },
    //使用babel-polyfill转译main.js兼容ie9+
    configureWebpack: config => {
        config.entry.app = ["babel-polyfill", "./src/main.js"];
    },
    //vue-cli3.0使用alias的方法
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('static',resolve('src/static'))
    },
    // pwa: {
    //     iconPaths: {
    //         favicon32: 'favicon.ico',
    //         favicon16: 'favicon.ico',
    //         appleTouchIcon: 'favicon.ico',
    //         maskIcon: 'favicon.ico',
    //         msTileImage: 'favicon.ico'
    //     }
    // },
}