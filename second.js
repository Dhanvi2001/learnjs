var num = prompt("Enter the number");
var myArr = num.split(" ").map((num) => {
    return Number(num)
})

console.log(myArr)
let sum = 0;

function add() {

    for (i = 0; i < myArr.length; i++) {
        sum = sum + myArr[i];
    }
    console.log(sum);
}
add()