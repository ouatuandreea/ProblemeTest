function myFunction() {
    do {
        var principal = prompt("Enter the principal.","1500");
    } while (isNaN(principal));
    do{
        var rate = prompt("Enter the rate \(1-100 range\).","43");
    } while (isNaN(rate) || ((rate%1)!=0));
    rate=rate/10;
    do{
        var years = prompt("Enter the number of years.","6");
    }while (isNaN(years));
    do{
        var timesCompound = prompt("Enter the number of times the interest is compounded per year.","4");
    } while (isNaN(timesCompound));
    
    total = calculateTotalCompoundInvestment(principal, rate, years, timesCompound);
    total = total.toFixed(2);
    
    document.getElementById("main").innerHTML = "After " + years + " years at " + rate + "% and compounded " + timesCompound + " times" + ", the investment will be worth $" + total;
}

function calculateTotalCompoundInvestment(principal, rate, years, timesCompound){
    var total = +principal * Math.pow(1+rate/100/timesCompound,timesCompound*years);
    return total;
}

function myOtherFunction() {
    do{
        var goal = prompt("Enter the goal.","1938.84");
    } while (isNaN(goal));
    do{
        var rate = prompt("Enter the rate \(1-100 range\).","43");
    } while (isNaN(rate) || ((rate%1)!=0));
    rate=rate/10;
    do{
        var years = prompt("Enter the number of years.","6");
    }while (isNaN(years));
    do{
        var timesCompound = prompt("Enter the number of times the interest is compounded per year.","4");
    } while (isNaN(timesCompound));
    
    total = calculateInitialAmountToInvest(goal, rate, years, timesCompound);
    total = total.toFixed(2);
    
    document.getElementById("main").innerHTML = "The goal of $" + goal + " can be achieved in " + years + " years, with a rate of " + rate + "% and compounded " + timesCompound + " times, with an initial investment of $" + total; 
}

function calculateInitialAmountToInvest(goal, rate, years, timesCompound){
    var total = goal / Math.pow(1+rate/100/timesCompound,timesCompound*years);
    return total;
}