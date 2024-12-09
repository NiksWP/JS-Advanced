function attachGradientEvents() {
    const resultElement = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', (event) => {
        console.log(event.clientX);
        console.log(event.currentTarget.offsetWidth);

        const elWidth = event.currentTarget.offsetWidth;
        const currentPosition = event.offsetX
        const ratio = Math.floor((currentPosition / elWidth) * 100);
        resultElement.textContent = `${ratio}%`;
    });
}