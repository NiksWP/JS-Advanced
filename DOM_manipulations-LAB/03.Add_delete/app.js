function addItem() {
    const itemToAdd = document.getElementById('newItemText');
    const whereToAdd = document.getElementById('items');
    
    const newItem = document.createElement('li');
    newItem.textContent = itemToAdd.value;

    const aElement = document.createElement('a');
    //aElement.href = '#';
    aElement.textContent = 'Delete'
    newItem.append(aElement); 

    aElement.addEventListener('click', (event) => {
        newItem.remove();
    });

    whereToAdd.append(newItem);

    newItem.value = '';
}

