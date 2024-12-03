function SortingNumbers(input = []){
    input = input.sort((a, b) => a - b);
    let arr = [];

    while (input.length > 0) {
        arr.push(input.shift());

        if (input.length > 0) {
            arr.push(input.pop()); 
        }
    }
 
    return arr;
}
