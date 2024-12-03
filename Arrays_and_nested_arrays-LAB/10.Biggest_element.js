function FindBiggest(input = []){
    let arr = input.reduce((acc, row) => acc.concat(row), []);
    let max = arr.reduce((max, current) => Math.max(max, current), -Infinity)
    return max;
}
