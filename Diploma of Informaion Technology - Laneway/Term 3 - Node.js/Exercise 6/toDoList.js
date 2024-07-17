const addItemForm = document.querySelector('form');

const displayData = ({ dueDate, task, priority }) => {
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  const checkboxTd = document.createElement('td');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = false;
  checkboxTd.appendChild(checkbox);

  const dueDateTd = document.createElement('td');
  dueDateTd.textContent = dueDate;

  const taskTd= document.createElement('td');
  taskTd.textContent = task;

  const priorityTd = document.createElement('td');
  priorityTd.textContent = priority;

 
  tr.appendChild(checkboxTd);
  tr.appendChild(dueDateTd);
  tr.appendChild(taskTd);
  tr.appendChild(priorityTd);

  tbody.appendChild(tr);
};

const toDoList = []

addItemForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(addItemForm);

    const response = await fetch('/', {
        method: 'POST',
        body: new URLSearchParams(formData)
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);

      if (data.list && Array.isArray(data.list)) {
        const latestItem = data.list[data.list.length - 1];
        const { dueDate, task, priority } = latestItem;
        displayData({ dueDate, task, priority });
      }

      // tbody.innerHTML += data.html;
      addItemForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });




