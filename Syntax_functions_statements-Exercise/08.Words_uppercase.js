function WordsUpperCase(input){
    let upperCase = input.toUpperCase();
    let wordArray = upperCase.split(/\W+/);
    let filteredText = wordArray.filter(x => x != 0);
    console.log(filteredText.join(", "));
}
