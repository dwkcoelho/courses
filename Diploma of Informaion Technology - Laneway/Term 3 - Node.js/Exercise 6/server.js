const express = require('express');
const app = express();
const path = require('node:path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res)  => res.sendFile(path.join(__dirname, "/index.html")));

let toDoList = [];

function createItemRow(dueDate, task, priority) {
    return `
        <tr>
            <td><input type="checkbox"></td>
            <td>${dueDate}</td>
            <td>${task}</td>
            <td>${priority}</td>
        </tr>
    `;
}

app.post('/', (req, res) => {
    const {dueDate, task, priority} = req.body;
    toDoList.push({ dueDate, task, priority });

    console.log("New Item Added:", dueDate, task, priority);
    console.log("Updated To-Do List:", toDoList);

    const newRowHtml = createItemRow(dueDate, task, priority);
    
    res.send({ html: newRowHtml, list: toDoList });
})

app.listen(3000);