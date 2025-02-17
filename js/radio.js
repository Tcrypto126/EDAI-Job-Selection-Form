const radioButtons = document.querySelectorAll('input[name="radio"]');
const forms = document.querySelectorAll('.form');

forms.forEach(form => {
    form.classList.remove('active');
});

radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        forms.forEach(form => {
            form.classList.remove('active');
            form.style.display = 'none';
        });

        const selectedForm = forms[index];
        selectedForm.style.display = 'block';
        requestAnimationFrame(() => {
            selectedForm.classList.add('active');
        });
    });
});