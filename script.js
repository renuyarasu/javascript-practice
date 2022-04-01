// JavaScript Practice | https://t.me/practicejs
console.clear();
// Practice:03

const myObject = {
    name: 'VedaGna',
    age: 5,
    function_01: function () {
        console.log(this.age);
    },
    function_02: () => {
        console.log(this.age);
    }
};
myObject.function_01(); // 5
myObject.function_02(); // undefined