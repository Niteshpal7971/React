const form = document.querySelector("#bmiForm");


//This usecase will give you empty
// const height = parseInt(document.querySelector("#height").value);
//const weigth = parseInt(document.querySelector("#weigth").value);

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result")

    if(height ===" " || height<0 || isNaN(height)){
        result.innerHTML = `plase giva a valid height ${height}`
    }else if(weight ===" " || weight<0 || isNaN(weight)){
        result.innerHTML = `plase giva a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(3);
        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi}, &nbsp Under Waight</span>`
        }else if(bmi > 24.9){
            result.innerHTML = `<span>${bmi}, &nbsp Over Waight</span>`
        }else{
            result.innerHTML = `<span>BMI:- ${bmi},&nbsp Normal In Range</span>`
        }
    }
})