function myFunction(){
    var weight;
    do{
        weight = prompt("What is your weight?", "80");
    } while(isNaN(weight));
    var gender;
    do{
        gender = prompt("What is your gender? (m/f)","m");
    } while(gender!=="m"&&gender!=="f");
    var nrDrinks;
    do{
        nrDrinks = prompt("How many drinks did you have?","4");
    } while(isNaN(nrDrinks));
    var alcoholPerDrink;
    do{
        alcoholPerDrink = prompt("How many ounces of alcohol do the consumed drinks have?","0.6")
    } while(isNaN(alcoholPerDrink));
    var hoursSinceLastDrink
    do{
        hoursSinceLastDrink = prompt("How many hours since your last drink?","2");
    } while(isNaN(hoursSinceLastDrink));
    
    var totalAlcoholConsumed = alcoholPerDrink * nrDrinks;
    var BAC = calculateBAC(totalAlcoholConsumed,weight,gender,hoursSinceLastDrink);
    BAC = BAC.toFixed(3);
    
    if(BAC>0.08){
        document.getElementById("main").innerHTML = "Your BAC is " + BAC + "<br/>It is NOT legal for you to drive.";
    } else document.getElementById("main").innerHTML = "Your BAC is "+ BAC + "<br/>It is legal for you to drive.";
    
}

function calculateBAC(A,W,g,H){
    var r;
    if(g==="f"){
        r=0.66;
    } else r=0.73;
    var BAC=(A*5.14/W*r)-0.015*H;
    return BAC;
}