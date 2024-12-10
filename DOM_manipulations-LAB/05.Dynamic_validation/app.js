function validate() {
    const emailElement = document.getElementById('email');

    emailElement.addEventListener('change', (event) => {
        const email = event.currentTarget.value;
        
        const pattern = /^[a-z]+\@[a-z]+\.[a-z]+$/;

        if (!pattern.test(email)) {
            event.currentTarget.classList.add('error');
        } else {
            event.currentTarget.classList.remove('error');
        }
    });
}