const arr1 = Array(prompt("enter").split(" "));
const arr2 = Array(prompt("enter").split(" "));

const merged = [...arr1, ...arr2];

console.log(merged);
console.log(arr1);
console.log(arr2);