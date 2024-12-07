function calc() {
    let firstElement = document.querySelector('input#num1');
    let secondlement = document.querySelector('input#num2');
    let result = document.querySelector('input#sum');

    result.value = Number(firstElement.value) + Number(secondlement.value);
}
