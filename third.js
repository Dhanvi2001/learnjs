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
    avg = sum / myArr.length;
    console.log(avg);
}


function max() {

    var m = 0;
    var i;
    for (i = 0; i < myArr.length; i++) {

        if (myArr[i] > m) {

            m = myArr[i];

        }

    }
    console.log(m);
}


function min() {

    var m = Infinity;
    var i;
    for (i = 0; i < myArr.length; i++) {

        if (myArr[i] < m) {

            m = myArr[i];

        }

    }
    console.log(m);
}
min();
max();
average()