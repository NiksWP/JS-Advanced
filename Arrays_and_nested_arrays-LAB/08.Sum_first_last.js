function Sum(input = []){
    let sum = 0;
    sum += Number(input.shift());
    sum += Number(input.pop());
    return sum;
}

console.log(Sum(['20', '30', '40']));