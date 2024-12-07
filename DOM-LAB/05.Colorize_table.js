function colorize() {
    let evenRowelements = document.querySelectorAll('table tr:nth-child(2n)');

    for (const elementRow of evenRowelements) {
        elementRow.style.backgroundColor = 'teal';
    }
}