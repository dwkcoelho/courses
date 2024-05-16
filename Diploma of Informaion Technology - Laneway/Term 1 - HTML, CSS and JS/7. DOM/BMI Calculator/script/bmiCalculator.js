
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    let bmi = (weight / (height ** 2)).toFixed(1);
    console.log(bmi)
    if(bmi === NaN || bmi === "Infinity" || bmi < 10 || bmi > 50) {
        result.innerText = "You need to put some value."
    } else {
        if(bmi < 18.5) {
            result.innerText = bmi + " - Underweight"
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerText = bmi + " - Healthy Weight"
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            result.innerText = bmi + " - Overweight"
        } else if (bmi >= 30 && bmi <= 39.9) {
            result.innerText = bmi + " - Obesity"
        } else {
            result.innerText = bmi + " - Severe Obesity"
        }      
    }
})



