function merge() {
    const arr1 = Array(prompt("enter first array"));
    const arr2 = Array(prompt("enter second array"));
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);
}

merge()