let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    mode: 'development', //模式。默认两种production development
    entry: './src/main.js', //入口
    output: { //出口
        filename: 'bundle.[hash:8].js',//打包后的文件名
        path: path.resolve(__dirname, 'build')//路径必须是绝对路径   path.resolve 是在当前的dist变成绝对路径 
    },
    plugins: [
        //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
            },
            hash: true
        })
    ],
    module: {//模块
        rules: [//规则 css-loader 解析 @import这种语法的  
            //style-loader 他是吧css插入到head标签中
            //loader特点 希望单一 一个就字符串 多个就用数组
            //loader的顺序是从左向又执行 从下到上执行
            //loader还可以写成对象方式 
            { test: /\.css$/, use: [{ loader: 'style-loader',options:{insert:function insertAtTop(element) {
                var parent = document.querySelector('head');
                var lastInsertedElement =
                  window._lastElementInsertedByStyleLoader;

                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }

                window._lastElementInsertedByStyleLoader = element;
              }}}, 'css-loader'] },
            { test: /\.less$/, use: [{ loader: 'style-loader',options:{insert:function insertAtTop(element) {
                var parent = document.querySelector('head');
                var lastInsertedElement =
                  window._lastElementInsertedByStyleLoader;

                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }

                window._lastElementInsertedByStyleLoader = element;
              }}}, 'css-loader','less-loader'] }
        ]
    }
} 