//filter/map/reduce 和java8函数编程 差不多意思了-> 成 =>
const numbers = [10, 139, 109, 438, 5, 8, 545, 645];
let reduce2 = numbers.filter(x => {
    return x < 100
}).map(y => {
    return y * 10
}).reduce((x, y) => {
    return x + y;
});
console.log(reduce2);

let filter1 = numbers.filter(function (n) {
    return n > 100;
});
let filter = numbers.filter(x => x > 100);
console.log(filter);
console.log(filter1);
let map1 = numbers.map(function (n) {
    return n * 10;
});
let map = numbers.map(x => x * 2);
console.log(map);
console.log(map1);
let reduce = numbers.reduce(function (x, y) {
    return x + y;
}, 0);
let reduce1 = numbers.reduce((x, y) => {
    return x + y;
}, 0);
console.log(reduce);
console.log(reduce1);