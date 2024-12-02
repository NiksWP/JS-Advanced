function Solve(params){
    let sum = 0;
    let invertedSum = 0;
    let concatSum = '';

    for (let i = 0; i < params.length; i++) {
        const currentNum = params[i];
        sum += currentNum;
        invertedSum += 1 / currentNum;
        concatSum += currentNum;
    }

    console.log(sum);
    console.log(invertedSum);
    console.log(Number(concatSum));
}

Solve([1, 2, 3, 4, 5]);
