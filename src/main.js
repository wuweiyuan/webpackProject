// import $ from 'jquery'
console.log('jquery',$)
console.log('wwwwwuwei')
require('./a.js')
require('./index.css')
require('./index.less')


let fn = ()=>{
    console.log('wwy在学webpack')
}
fn()

@log
class a {
    A=1
}
let wwy = new a();
console.log('wwy',wwy)
function log(target){
    console.log(target,'23')
}


import png from './weiyuan.png'
console.log('图片地址',png)
let image = new Image()
image.src = png
document.body.appendChild(image)