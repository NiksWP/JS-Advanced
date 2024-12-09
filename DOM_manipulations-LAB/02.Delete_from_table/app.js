function deleteByEmail() {
    
    const inputElement = document.querySelector("input[name=email]");
    const resultELement = document.getElementById("result");
    const trElements = document.querySelectorAll('#customers tbody tr');

    const resultRow =  Array.from(trElements).find(tr => tr.getElementsByTagName('td')[1]
    .textContent === inputElement.value)
    if (resultRow) {
        resultRow.remove();
        resultELement.textContent = 'Deleted.';
    }
    else{
        resultELement.textContent = 'Not found.';
    }

    inputElement.value = '';
}