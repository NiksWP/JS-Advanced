function Operation(number1, number2, operator){
    switch(operator){
        case "+": return number1 + number2;
        case "-": return number1 - number2;
        case "*": return number1 * number2;
        case "/": return number1 / number2;
        case "%": return number1 % number2;
        case "**": return number1**number2;
        default:
            return false; 
    }
}

console.log(Operation(1, 4, "**"));
