function Solve(a, b){
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp
    }

    return a;
}

console.log(Solve(2154, 458));
