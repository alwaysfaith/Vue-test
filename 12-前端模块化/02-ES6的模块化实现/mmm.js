//1. 导入对象{}中定义的变量
import {flag, name} from "./aaa.js";

if (flag) {
    console.log('小明是天才吗？，哈哈哈！！！');
}
//2. 直接导入export定义的变量
import {num, height} from "./aaa.js";
import {num1, birth} from "./aaa.js";

console.log(num);
console.log(height);
console.log(num1);
console.log(birth);

//3. 导入export的function
import {numSum} from "./aaa.js";

console.log(numSum(10, 50));
import {Person} from "./aaa.js";

let person = new Person();
person.run();

//4. 导入import default中的内容
import add from "./aaa.js";

console.log(add);

//5. 统一全部导入
// import {num, height, name, age, birth, numSum, sum} from "./aaa.js";
import * as aaa from "./aaa.js";

console.log(aaa.name);
console.log(aaa.age);