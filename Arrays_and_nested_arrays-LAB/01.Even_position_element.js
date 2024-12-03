function Solve(input){
    let numbers = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            numbers.push(input[i]);
        }
    }
    return numbers;
}
