function Solve(input){
    let sorted = input.sort((a, b) => a - b);
    const halfIndex = Math.floor(sorted.length / 2);
    sorted = sorted.splice(halfIndex);
    return sorted;
}