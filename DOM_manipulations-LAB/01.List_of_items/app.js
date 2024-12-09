function addItem() {
    const elementToAdd = document.getElementById('newItemText').value;
    const ulParentToAdd = document.getElementById('items');
    const liElement = document.createElement('li');
    liElement.textContent = elementToAdd;
    ulParentToAdd.appendChild(liElement);
}