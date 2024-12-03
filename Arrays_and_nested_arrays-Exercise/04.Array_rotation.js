function RotateArray(input = [], times){
    times = times % input.length;

    if (times == 0) {
        console.log(input.join(" "));
        return;
    }

    let tempArr = input.slice(-times);
    tempArr = tempArr.concat(input.slice(0, input.length - times));
    console.log(tempArr.join(" "));
}
