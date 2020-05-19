//1. 使用commonjs的模块化规范
const {add, nul} = require('./mathUtils');
console.log(add(10, 20));
console.log(nul(10, 20));


//2. 使用ES6的模块化规范
import {name, age, height, address, birth, sex} from "./info";

console.log(name);
console.log(age);
console.log(height);
console.log(address);
console.log(birth);
console.log(sex);
