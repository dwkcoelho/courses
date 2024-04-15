let meters = parseFloat(prompt("Insert a meter value: "));
let converter = parseFloat(prompt("Measurement Converter:\n1- milímetro (mm) \n2- centímetro (cm) \n3- decímetro (dm) \n4- decâmetro (dam) \n5- hectômetro (hm) \n6- quilômetro (km)"));

switch (converter) {
    case 1: 
        alert(`${meters * 1000}mm`);
        break;
    case 2: 
        alert(`${meters * 100}cm`);
        break;
    case 3: 
        alert(`${meters * 10}dm`);
        break;
    case 4: 
        alert(`${meters / 10}dam`);
        break;
    case 5: 
        alert(`${meters / 100}hm`);
        break;
    case 6: 
        alert(`${meters / 1000}km   `);
        break;
    default: 
        alert(`Invalid.`)    
}