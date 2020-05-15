const app = new Vue({
    el: '#app',
    data: {
        message: '你好啊!!!fw',
        books: [
            {id: 111, name: 'Effective Java中文版', date: '2006-09', price: 129, count: 1},
            {id: 112, name: '代码大全（第2版）', date: '2006-02', price: 139, count: 1},
            {id: 113, name: 'Java编程思想', date: '2006-03', price: 149, count: 1},
            {id: 114, name: 'Head First设计模式', date: '2006-05', price: 159, count: 1},
            {id: 115, name: '代码整洁之道', date: '2006-09', price: 169, count: 1},
            {id: 116, name: 'Java并发编程实战', date: '2006-12', price: 179, count: 1},
        ],
    },
    methods: {
        btnIncrement: function (index) {
            this.books[index].count++;
        },
        btnDecrement(index) {
            this.books[index].count--;
        },
        removeHandler(index) {
            this.books.splice(index, 1);
        },
    },
    computed: {
        totalPrice: function () {
            let totalPrice = 0;
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].count
            }
            return totalPrice;
        },
        totalPriceForOf: function () {
            let totalPrice = 0;
            for (let index in this.books) {
                totalPrice += this.books[index].price * this.books[index].count
            }
            return totalPrice;
        },
        totalPriceForIn: function () {
            let totalPrice = 0;
            for (let book of this.books) {
                totalPrice += book.price * book.count
            }
            return totalPrice;
        },
        totalPriceReduce: function () {
            //跟java reduce规约操作其实差不多，left代表上一个操作后的值，right代表当前对象，0表示第一次操作的值
            return this.books.reduce((left, right) => {
                console.log(left);
                console.log(right);
                return right.price * right.count + left;
            }, 0);
        }
    },
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2);
        }
    },
});



















