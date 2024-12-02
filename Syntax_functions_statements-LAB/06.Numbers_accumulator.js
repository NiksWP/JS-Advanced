function Accumulator(n, m){
    const firstNum = Number(n);
    const secondNum = Number(m);
    let sum = 0;
    for (let index = firstNum; index <= secondNum; index++) {
        sum += index;
    }
    return sum;
}

console.log(Accumulator("10", "100"))
