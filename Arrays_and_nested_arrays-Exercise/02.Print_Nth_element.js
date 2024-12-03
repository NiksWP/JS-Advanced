function ReturnN(input = [], number){
    arr = input.filter((current, index) => index % number == 0);
    return arr;
}
