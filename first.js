function merge(cars, fruits) {
    return [...cars, ...fruits];
}

const cars = ["saab", "bmw", "toyota"];
const fruits = ["cheery", "apple", "kiwi"];

merge(cars, fruits);