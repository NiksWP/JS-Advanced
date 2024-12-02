function Solve(input){
    const digits = input.toString().split('');
    const firstElement = digits[0];
    let sum = 0;
    let equality = true;
    for (let i = 0; i < digits.length; i++) {
        const element = digits[i];
        sum += Number(digits[i]);
        if (element === firstElement) {
            continue;
        }
        equality = false;
    }
    console.log(equality ? true : false);
    console.log(sum);
}

Solve(123456);
