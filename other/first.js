const arr1 = Array(prompt("enter").split(" "));
const arr2 = Array(prompt("enter").split(" "));

const merged = [...arr1, ...arr2];

console.log(merged);
console.log(arr1);
console.log(arr2);

//--------------------------------------------------------------------------------------------------------

function add() {

    const arr1 = Array(prompt("enter").split(" "));
    const arr2 = Array(prompt("enter").split(" "));

    const arr3 = arr1.concat(arr2);

    console.log(arr3);
}
add();

//-------------------------------------------------------------------------------------------------------

function add() {
    var arr1 = Array(prompt("enter").split(" "));
    var arr2 = Array(prompt("enter").split(" "));

    for (i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    console.log(arr1);
}

add();