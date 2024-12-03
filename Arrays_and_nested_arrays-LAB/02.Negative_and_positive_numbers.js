function Solve(input){
    let arr = [];

    for (const number of input) {
        if (number < 0) {
            arr.unshift(number);
        }
        else {
            arr.push(number);
        }
    }

    for (const number of arr) {
        console.log(number);
    }
}
