function myFunction(){
    do{
        var amount = prompt("How many euros are you exchanging?","81");
    } while(isNaN(amount));
    var rate = 1.09140;
    var newAmount = (amount*rate).toFixed(2);
    document.getElementById("main").innerHTML = amount + " euros at an exchange rate of " + rate + " is " + newAmount + " U.S. dollars.";
}
