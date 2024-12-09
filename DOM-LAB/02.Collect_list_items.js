function extractText() {
    let liElements = document.querySelectorAll('ul#items li');
    const liElementsArr = Array.from(liElements).map(liElement => liElement.textContent);
    let resultAreaElement = document.querySelector('textarea#result');
    resultAreaElement.value = liElementsArr.join('\n');
}
