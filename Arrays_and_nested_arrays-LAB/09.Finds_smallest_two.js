function FindSmallestTwo(input = []){
    let arr = input.sort((a, b) => a-b);
    arr = arr.slice(0, 2)
    console.log(arr.join(" "))
}
