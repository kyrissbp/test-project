// Closures
const first = () => {
    const greet = 'Hi';
    const second= () => {
        const name = "bobby";
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Currying - converting a function that takes multiple params into a func that takes params one at a time
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(4));
const multiplyBy5 = curriedMultiply(5);  // Always mult by 5

// Compose - combine 2 functions
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);