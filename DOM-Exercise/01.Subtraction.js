function search() {
    let townsElements = document.querySelectorAll('ul li');
 
    for (const town of townsElements) {
          town.style.fontWeight = 'normal';
          town.style.textDecoration = 'none';
    }
 
    let searching = document.querySelector('input[type=text]').value;
    let regex = new RegExp(searching);
 
    let sum = 0;
    for (const town of townsElements) {
       if (regex.test(town.textContent)) {
          town.style.fontWeight = 'bold';
          town.style.textDecoration = 'underline';
          sum++;
       }
    }
 
    let resultElement = document.getElementById('result');
    resultElement.textContent = `${Number(sum)} matches found`
 }
 