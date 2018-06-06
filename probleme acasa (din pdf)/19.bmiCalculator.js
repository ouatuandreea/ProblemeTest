function myFunction(){
    var weigth;
    do{
        weigth = prompt("What is your weigth",150);
    } while(isNaN(weigth));
    var height;
    do{
        height = prompt("What is your height",72);
    } while(isNaN(height));
    var bmi = calculateBMI(weigth,height);
    bmi=bmi.toFixed(2);
    document.getElementById("main").innerHTML = "Your BMI is " + bmi;
    if(bmi>25){
        document.getElementById("main").innerHTML += "<br/>You are overweigth. You should see a doctor.";
    } else if (bmi<18.5){
        document.getElementById("main").innerHTML += "<br/>You are underweigth. You should see a doctor.";
    } else document.getElementById("main").innerHTML += "<br/> You are within the ideal weigth range.";
}

function calculateBMI(weight,height){
    return (weight/(height*height))*703;
}