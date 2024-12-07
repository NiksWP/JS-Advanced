function sumTable() {
    let arr = Array.from(document.querySelectorAll('tbody tr:not(:last-child) td:nth-child(2)'));
    let sum = arr.reduce((acc, current) => acc += Number(current.textContent), 0) 
    let sumElement = document.querySelector('tbody tr:last-child td:last-child');
    console.log(sum);
    sumElement.textContent = sum
}