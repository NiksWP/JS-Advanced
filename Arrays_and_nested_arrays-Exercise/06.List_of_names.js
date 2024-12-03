function NameSort(input = []){
    input = input.sort((a, b) => a.localeCompare(b));
    
    input.forEach((n, index) => {
        console.log(`${index + 1}.${n}`)
    });
}
