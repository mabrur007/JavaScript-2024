const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    
    const result = document.querySelector("#results");
    
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Provide a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Provide a valid weight"
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `Under Weight = ${bmi}`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `Normal Range = ${bmi}`
        } else {
            result.innerHTML = `Overweight = ${bmi}`
        }
    }
})