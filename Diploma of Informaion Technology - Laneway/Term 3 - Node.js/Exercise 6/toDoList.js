const addItemForm = document.querySelector('form')
const tbody = document.querySelector('tbody')

addItemForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(addItemForm);
    const response = await fetch('/', {
        method: 'POST',
        body: formData
    });

    const data = await response.json()

    tbody.innerHTML += data.html

    addItemForm.reset();
});


