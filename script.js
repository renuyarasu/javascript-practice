// JavaScript Practice | https://t.me/practicejs
console.clear();

// Practice:04

const myObject = {
    category: 'Books',
    names: ['Classics', 'Comic', 'Fantasy', 'Fiction', 'Romance']
};

let second = { ...myObject };
second.names.push('Self-Help');
console.log(second.names); // [ 'Classics', 'Comic', 'Fantasy', 'Fiction', 'Romance', 'Self-Help' ]
console.log(second.names.pop());
console.log(second.names.shift());
console.log(second.names.push('Non-Fiction'));
console.log(second.names); // [ 'Comic', 'Fantasy', 'Fiction', 'Romance', 'Non-Fiction' ]