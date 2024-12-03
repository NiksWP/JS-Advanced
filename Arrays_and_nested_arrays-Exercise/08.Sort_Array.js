function SortByCriteria(input = []){
    input = input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });

    input.forEach(element => {
        console.log(element);
    });
}
