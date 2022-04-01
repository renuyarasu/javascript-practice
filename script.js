// JavaScript Practice: 07
console.clear();


reducer = () => {
    return [[0, 1], [2, 3]].reduce((acc, cur) => {
        return acc.concat(cur);
    },[2,2])
};
console.log(reducer()); // [ 2, 2, 0, 1, 2, 3 ]