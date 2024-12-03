function Solve(input = []){
    let initial = 1;
    let arr = [];
    for (const command of input) {
        if (command == 'add') {
            arr.push(initial);
        }
        else if (command == 'remove') {
            arr.pop();
        }
        initial += 1;
    }
    if (arr.length < 1) {
        console.log('Empty');
    }
    else{
        console.log(arr.join('\n'));
    }
}
