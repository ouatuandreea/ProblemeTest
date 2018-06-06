function myFunction(){
    var balance;
    do{
        balance = prompt("What is your balance?","5000");
    } while(isNaN(balance));
    var APR;
    do{
        APR=prompt("What is the APR on the card (as a percent)?","12");
    } while(isNaN(APR)&&APR<1);
    APR=APR/36500;
    var numberOfMonths;
    var monthlyPayment;
    if(document.getElementById("r1").checked){ 
        do{
            monthlyPayment=prompt("What is the monthly payment you can make?","100");
        } while(isNaN(monthlyPayment));
        numberOfMonths = calculateMonthsUntilPaidOff(APR,balance,monthlyPayment);
        document.getElementById("main").innerHTML="It will take you " + numberOfMonths + " months to pay off this card.";
    } else if(document.getElementById("r2").checked){
        do{
            numberOfMonths=prompt("What is the number of months you want to keep paying?","70");
        } while(isNaN(numberOfMonths));
        monthlyPayment = calculateAmountToPayPerMonth(APR,balance,numberOfMonths);
        document.getElementById("main").innerHTML="You will have to pay $" + monthlyPayment + " each month.";
    }
}

function calculateMonthsUntilPaidOff(dailyRate,balance,monthlyPayment){
    return Math.ceil((-1)/30*(Math.log(1+balance/monthlyPayment*(1-Math.pow(1+dailyRate,30)))/Math.log(1+dailyRate)));
}

function calculateAmountToPayPerMonth(dailyRate,balance,months){
    var monthlyPayment = (balance*(1-Math.pow(1+dailyRate,30)))/(Math.pow(1/10,30*Math.log(1+dailyRate)*months)-1);
    monthlyPayment = monthlyPayment.toFixed(2);
    return monthlyPayment;
}