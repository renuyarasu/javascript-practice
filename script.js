// JavaScript Practice: 07
console.clear();

reducer = () => {
    return [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]].reduce((acc, cur) => {
        return acc.concat(cur)
    }, [])
};
console.log(reducer()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]