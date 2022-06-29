const { count } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Height of the well ', (answer) => {
    let height = Number(answer);
    let climb = Number(0);
    let days = Number(0);
    let check = true;
    while (check) {
        days++;
        climb = climb + 7;
        if (climb >= height) {
            break;
        } else {
            climb = climb - 2;
        }
    }
    console.log(`It will take ${days} days to come out`);
    console.log("Resting the process");
    rl.close();
});