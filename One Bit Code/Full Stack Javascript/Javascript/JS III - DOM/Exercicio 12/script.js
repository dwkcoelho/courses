const addTechBtn = document.getElementById('addTec');
const form = document.getElementById('devRegister');
const developers = [];
let inputRows = 0;

function createLabel(text, htmlFor){
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label;
}

function createInput(id, value, name, type = 'text', placeholder = '' ){
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

addTechBtn.addEventListener('click', function(ev) {
    ev.preventDefault();

    const skillsList = document.getElementById('skillsList');

    const rowIndex = inputRows;
    inputRows++

    const newRow = document.createElement('li');
    newRow.id = 'inputRow-' + rowIndex;
    newRow.className = 'inputRow';

    const techNameLabel = createLabel('Tecnology: ', 'techName-' + rowIndex);
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName');

    const expLabel = createLabel('   Experience: ');

    const id1 = 'expRadio-' + rowIndex + '.1';
    const expRadio1 = createInput(id1, '0-2 years', 'techExp-' + rowIndex, 'radio');
    const expLabel1 = createLabel('0-2 years', id1);

    const id2 = 'expRadio-' + rowIndex + '.2';
    const expRadio2 = createInput(id2, '3-4 years', 'techExp-' + rowIndex, 'radio');
    const expLabel2 = createLabel('3-4 years', id2);

    const id3 = 'expRadio-' + rowIndex + '.3';
    const expRadio3 = createInput(id3, '5+ years', 'techExp-' + rowIndex, 'radio');
    const expLabel3 = createLabel('5+ years', id3);

    const removeRowBtn = document.createElement('button');
    removeRowBtn.type = 'button';
    removeRowBtn.innerText = "Delete";

    removeRowBtn.addEventListener("click", function(ev){
        removeRowBtn.removeChild(newRow);
    })

    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3
    );

    skillsList.appendChild(newRow);
})


form.addEventListener("submit", function(ev) {
    ev.preventDefault();


  const fullNameInput = document.getElementById('fullName')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullNameInput.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')


    fullNameInput.value = '';
    inputRows.forEach(function(row){
        row.remove();
    })

    console.log(newDev);
})