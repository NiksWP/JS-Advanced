function toggle() {
    let extraText = document.getElementById('extra');
    let buttonElement = document.querySelector('span.button');
    if (extraText.style.display == 'none') {
        extraText.style.display = 'block';
        buttonElement.textContent = 'Less';
    }
    else {
        extraText.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}
