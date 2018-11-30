module.exports={
    // 基本路径
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    // 输出文件目录
    outputDir: 'dist', // 默认dist
    // 用于嵌套生成的静态资产（js,css,img,fonts）目录
    // assetsDir: '',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: 'index.html', // Default: 'index.html'
    // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8888,
        https: false,
        open: true,
        proxy: null, // 设置代理
        before: app => {},
    }
}