// Advanced arrays
const array = [1,2,10,16];
const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2);
});

console.log('foreach',double);

// Map - maps returned values to a new array (like foreach plus push)

// Foreach iterates over collection. Map iterates, but must have a return value (it always returns something)
// stores return values in new array.
// Should use map array for this because it eliminates side effects (preserves purity of function)

/*
const mapArray = array.map(num => {
    return num * 2
});
*/

// shorthand:
const mapArray = array.map(num => num * 2);

console.log('map',mapArray);

// filter - filter an array (AWESOME!)

const filterArray = array.filter(num => num > 5);
console.log('filter',filterArray);

// Reduce - interesting... iterates through with accumulator...

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log('reduced',reduceArray);