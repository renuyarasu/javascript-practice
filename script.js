// JavaScript Practice: 08
console.clear();


const id = Symbol.for('id');

let user = {
    [id]: 1,
    role: 'user',
    array: [0, 1, 2, 3],
};
const admin = {
    [id]: 2,
    role: 'admin'
};
const object = Object.assign({}, user, admin);

object.array.push(100500); // 2
console.log(object[id], object.array.pop()); // 100500