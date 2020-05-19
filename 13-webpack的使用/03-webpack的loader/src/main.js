//1. 使用commonjs的模块化规范
const {add, nul} = require('./js/mathUtils');
console.log(add(10, 20));
console.log(nul(10, 20));


//2. 使用ES6的模块化规范
import {name, age, height, address, birth, sex} from "./js/info";

console.log(name);
console.log(age);
console.log(height);
console.log(address);
console.log(birth);
console.log(sex);

//3. 依赖css文件
let require1 = require('./css/normal.css');

//4. 依赖less文件
let require2 = require('./css/special.less');

document.writeln('<h2>你好啊，李银河！</h2>');


