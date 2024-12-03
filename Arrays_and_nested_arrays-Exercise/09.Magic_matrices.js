function MagicMatrix(input = []){
    let sums = [];
    input.forEach(row => {
        sums.push(row.reduce((acc, current) => acc += current))
    });

    let colSums = Array(input[0].length).fill(0);
    input.forEach(row => {
        row.forEach((value, index) => {
            colSums[index] += value;
        });
    });
    
    let combined = sums.concat(colSums);
    if (combined.length > 0 && combined.some(x => x !== combined[0])) {
        console.log(false)
    }
    else
    {
        console.log(true);
    }
}
