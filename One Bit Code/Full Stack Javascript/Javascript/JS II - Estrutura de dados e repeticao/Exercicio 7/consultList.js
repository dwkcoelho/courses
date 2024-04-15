let option;
let patientList = [];
let patientPositions = [];

do {
option = parseFloat(prompt(patientPositions + "1 - New patient\n2 - Consult patient\n3 - Exit"));

switch(option) {
    case 1:
        let namePatient = prompt("Patient Name: ");
        patientList.push(namePatient);
        let patientAddIndex = patientList.indexOf(namePatient);
        patientPositions.push((patientAddIndex + 1) + "º " + patientList[patientAddIndex] + "\n")
        break;
    case 2:
        if(patientList != 0) {
            let consultingPatient = patientList.shift();
            patientPositions.shift();
            alert(`Patient ${consultingPatient} in consultation`);
        } else {
            alert("No have patience");
        }
        break
    case 3:
        break;
    default:
        alert("Invalid option");
}

for(let i = 0; i < patientPositions.length; i++) {
    patientPositions[i] = (patientList.indexOf(patientList[i]) + 1) + "º " + patientList[i] + "\n";
}

}while(option != 3)