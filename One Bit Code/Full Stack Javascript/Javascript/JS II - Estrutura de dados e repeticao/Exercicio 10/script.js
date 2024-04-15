let vacancy = {};
let vacancies = [];
let candidate = {};
let candidates = [];

//Sub-Functions
function registeredCandidates(vacancy) {
    const registered = candidates.filter(function(candidate) {
        return candidate.vacancyId === vacancy;
    })

    return registered; 
}

function nameRegisteredCandidates(vacancy) {
    const nameList = candidates.map(function(candidate) {
        registeredCandidates(vacancy);
        return candidate.name;
    })

    return nameList;
} 

//Mainly-Functions
function showMenu() {
    return parseFloat(prompt(
            "Job Vacancy System\n"
            + "1. List available vacancies\n"
            + "2. Create a new vacancy\n"
            + "3. View a vacancy\n"
            + "4. Register a candidate for a vacancy\n"
            + "5. Delete a vacancy\n" 
            + "6. Exit"   
        ));
}

 
function availableVacancies() {

    vacancies.forEach(function (vacancy) {
        alert("ID: " + vacancy.id  + "\n"
             + "Name: " + vacancy.name +"\n"       
             + "Registered: " + (registeredCandidates(vacancy.id)).length);
    })
}

function newVacancy() {
    let newVacancy = {};

    newVacancy.id = vacancies.length + 1;
    newVacancy.name = prompt("Vacancy name:");
    newVacancy.description = prompt("Description:")
    newVacancy.limitDate = prompt("Limit date(dd/mm/yyyy):")

    let confirm = prompt(
                        "Do you want to confirm?(Yes/No)\n"
                        + "Name: " + newVacancy.name + "\n"
                        + "Description: " + newVacancy.description + "\n"
                        + "Limit date: " + newVacancy.limitDate + "\n"
                        ).toUpperCase();

    if(confirm === "YES") {
        vacancy = newVacancy;
    }
}

function viewVacancy() {
    let idAnswer = parseFloat(prompt("Write the vancancy id to see the informations below:"));
    if(idAnswer === vacancies[idAnswer - 1].id) {
        alert(
            "ID: " + vacancies[idAnswer - 1].id + "\n"
            + "Name: " + vacancies[idAnswer - 1].name + "\n"
            + "Description: " + vacancies[idAnswer - 1].description + "\n"
            + "Limit date: " + vacancies[idAnswer - 1].limitDate + "\n"
            + "Registred: " + (registeredCandidates(vacancies[idAnswer - 1].id)).length + "\n"
            + "Name list:\n" + nameRegisteredCandidates(vacancies[idAnswer - 1].id)
            );
    } else {
        alert("Vacancy doesn`t exist");
    }
    
}

function registerCandidate() {
    let newCandidate = {};

    newCandidate.name = prompt("Candidate name:");
    newCandidate.vacancyId = parseFloat(prompt("Vacancy ID:"))

    let confirm = prompt("Do you want to confirm you registration?(Yes/No)\n"
                        + "Name: " + vacancies[newCandidate.vacancyId - 1].name + "\n"
                        + "Description: " + vacancies[newCandidate.vacancyId - 1].description + "\n"
                        + "Limit date: " + vacancies[newCandidate.vacancyId - 1].limitDate + "\n").toUpperCase();

    if(confirm === "YES") {
        candidate = newCandidate;
    }
}

function deleteVacancy() {
    let idAnswer = parseFloat(prompt("Write the vancancy id to delete:"));
    if(idAnswer === vacancies[idAnswer - 1].id) {
        alert(
            "ID: " + vacancies[idAnswer - 1].id + "\n"
            + "Name: " + vacancies[idAnswer - 1].name + "\n"
            + "Description: " + vacancies[idAnswer - 1].description + "\n"
            + "Limit date: " + vacancies[idAnswer - 1].limitDate + "\n"
            + "DELETED!"
            )
        vacancies.splice((idAnswer - 1), 1);
    } else {
        alert("Vacancy doesn`t exist");
    }
}

function run() {
    let option;

    do{
        option = showMenu();

        switch(option){
            case 1:
                availableVacancies();
                break
            case 2:
                newVacancy();
                vacancies.push(vacancy);
                break
            case 3:
                viewVacancy();
                break
            case 4:
                registerCandidate();
                candidates.push(candidate);
                break
            case 5:
                deleteVacancy();
                break
            case 6:
                break
            default:
                alert("Invalid option")
        }

    }while(option != 6)
}

run();