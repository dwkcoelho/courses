const addItemForm = document.querySelector('form');
const tbody = document.querySelector('tbody');


addItemForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(addItemForm);

    const response = await fetch('/', {
        method: 'POST',
        body: new URLSearchParams(formData)
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      tbody.innerHTML += data.html;
      addItemForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });




