onst myObject = {
    name: 'VedaGna',
    age: 5,
    function_01: function () {
        console.log(this.age);
    },
    function_02: function () {
        console.log(this.age);
    }
};
myObject.function_01();
myObject.function_02();