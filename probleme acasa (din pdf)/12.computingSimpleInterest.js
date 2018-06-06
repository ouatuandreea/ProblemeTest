function myFunction(){
    do{
        var principal = prompt("Enter the principal.","1500");
    } while (isNaN(principal));
    do{
        var rate = prompt("Enter the rate \(1-100 range\).","43");
    } while (isNaN(rate) || ((rate%1)!=0));
    rate=rate/10;
    do{
        var years = prompt("Enter the number of years.","4");
    }while (isNaN(years));
    
    total = calculateTotalInvestment(principal, rate, years);
    total = total.toFixed(2);
    
    document.getElementById("main").innerHTML = "After " + years + " years at " + rate + "%, the investment will be worth $" + total;
    for(var i=1;i<=years;i++){
        var subtotal = +principal+calculateYearlyInvestment(principal,rate)*i;
        subtotal = subtotal.toFixed(2);
        document.getElementById("main").innerHTML += "<br/> Year " + i + ": $" + subtotal;
    }
}

function calculateTotalInvestment(principal, rate, years){
    var interest = calculateYearlyInvestment(principal,rate)*years;
    var total = +principal + +interest;
    return total;
}

function calculateYearlyInvestment(principal,rate){
    var yearlyInterest = +principal * +rate/100;
    return yearlyInterest;
}