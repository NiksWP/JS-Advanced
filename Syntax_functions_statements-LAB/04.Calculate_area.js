function CircleArea(input){
    const inputType = typeof(input);
    if (inputType == 'number'){
        const result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
        return;
    }
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}

CircleArea(4);
