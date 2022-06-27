var num = prompt("Enter the number");
var myArr = num.split(" ").map((num) => {
    return Number(num)
})
console.log(myArr)
let sum = 0;
let avg;

function average() {

    for (i = 0; i < myArr.length; i++) {
        sum = sum + myArr[i];
    }
    avg = sum / myArr.length
    console.log(avg);
}
var max = Math.max(...myArr);
var min = Math.min(...myArr);

console.log(max);
console.log(min);
average()