let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devServer: {//开发服务器配置
        port: 8888,
        progress: true,
        contentBase: './build',
        compress: true
    },
    mode: 'production', //模式。默认两种production development
    entry: './src/main.js', //入口
    output: { //出口
        filename: 'bundle.[hash:8].js',//打包后的文件名
        path: path.resolve(__dirname, 'build')//路径必须是绝对路径   path.resolve 是在当前的dist变成绝对路径 
    },
    plugins: [
        //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.htm l',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
            }, 
            hash: true
        })
    ]
} 