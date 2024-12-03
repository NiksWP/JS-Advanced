function Solve(input){
    return input.filter((x, index) => index % 2 != 0).map(x => x *= 2).reverse();
}
