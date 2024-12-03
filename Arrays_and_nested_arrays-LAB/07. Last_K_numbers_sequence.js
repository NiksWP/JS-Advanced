function Solve(first, second){
    const sequence = [1];

    for (let i = 0; i < first - 1; i++) {
        let lastK = sequence.slice(-second);
        let sumOfLastK = lastK.reduce((acc, current) => acc += current, 0);
        sequence.push(sumOfLastK);
    }
    return sequence;
}
