function DiagonalSum(arr = []){
    let result = [];
    let firstDiag = 0;
    let secondDiag = 0;
    for (let i = 0; i < arr.length; i++) {
        firstDiag += arr[i][i];
        secondDiag += arr[i][arr[i].length - 1 - i]
    }
    result.push(firstDiag);
    result.push(secondDiag);
    return result.join(" ");
}
