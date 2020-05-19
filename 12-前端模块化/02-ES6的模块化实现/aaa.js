var name = '小明';
var age = 19;
var flag = true;

function sum(num1, num2) {
    return num1 + num2;
}

if (flag) {
    console.log(sum(10, 20));
}

//1. 导出方式一:
export {
    flag, name, age, sum
}
//2. 导出方式二:
let num = 998;
let height = 1.98;
export {
    num, height
}
export let num1 = 1000;
export let birth = '03-28';

//3. 导出函数/类
export function numSum(num1, num2) {
    return num1 + num2;
}

export class Person {
    run() {
        console.log('在夕阳下奔跑');
    }
}

//4. 导入import default中的内容
const address = '北京市';
// export {
//     address
// }
// export const address = '北京市';
export default address;




