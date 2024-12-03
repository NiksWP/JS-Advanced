function FindPairs(input = []){
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            let element = input[i][j];
            if (input[i + 1] && element === input[i + 1][j]) {
                sum++;
            }
            if (input[i][j + 1] && element === input[i][j + 1]) {
                sum++;
            }     
        }
    }
    return sum;
}
