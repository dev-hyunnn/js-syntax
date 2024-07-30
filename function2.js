console.log(Math.round(1.6)); // 2
console.log(Math.round(1.4)); // 1

function sum(a,b) {
    console.log('A');
    return a + b;
    console.log('A');
}
console.log(sum(2, 4));