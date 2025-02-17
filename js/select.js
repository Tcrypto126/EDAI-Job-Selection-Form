function toggleDropdown(id) {
    const select = document.getElementById(id);
    const selectOptions = select.querySelector('#selectOptions');
    const arrow = select.querySelector('.arrow');
    selectOptions.classList.toggle('open');
    arrow.classList.toggle('up');
}

function selectOption(value, id) {
    const select = document.getElementById(id);
    var options = select.querySelectorAll('.option');
    for (var i = 0; i < options.length; i++) {
        if (options[i].textContent === value) {
            options[i].classList.add('selected');
        } else {
            options[i].classList.remove('selected');
        }
    }
    const selectHeader = select.querySelector('.select-header span');
    selectHeader.textContent = value;
    toggleDropdown(id);
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const customSelect = document.querySelectorAll('.custom-select');
    const selectOptions = document.querySelectorAll('#selectOptions');
    const arrow = document.querySelectorAll('.arrow');

    for (let i = 0; i < customSelect.length; i++) {
        if (!customSelect[i].contains(event.target)) {
            selectOptions[i].classList.remove('open');
            arrow[i].classList.remove('up');
        }
    }
});