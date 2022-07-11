let str = prompt("Enter the values").split(",").map(Number);
let sum = 0;
for (let i = 0; i < str.length; i++) {
    sum = sum + str[i];
}
console.log(sum);