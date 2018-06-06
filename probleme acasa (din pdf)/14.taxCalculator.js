function myFunction(){
    var amount;
    do{
        amount = window.prompt("What is the order amount?", "10");
    } while(isNaN(amount));
    var state;
    do{
        state = window.prompt("What is the state?","wiSConSiN");
    } while(!isNaN(state));
    var taxRate = 0.055;
    
    var tax = +taxRate * amount;
    tax = tax.toFixed(2)/1;
    var total = +amount + tax;
    
    if(state.toLowerCase()==="wi"||state.toLowerCase()==="wisconsin"){
        ocument.getElementById("main").innerHTML = "The subtotal is $" + amount + "<br/>The tax is $" + tax + "<br/> The total is $" + total;
    }
    if(state.toLowerCase()==="mn"||state.toLowerCase()==="minnesota"){
        document.getElementById("main").innerHTML = "The subtotal is $" + amount;
    }
}