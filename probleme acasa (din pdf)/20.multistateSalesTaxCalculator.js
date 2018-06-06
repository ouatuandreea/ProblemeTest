function myFunction(){
    var tax;
    var total;
    var amount;
    do{
        amount = prompt("What is the order amount?","10");
    } while(isNaN(amount));
    tax=0.05*amount;
    var state;
    state = prompt("What state do you live in?","Wisconsin");

    if(state.toLowerCase()==="wisconsin"||state.toLowerCase()==="wi"){
        var county;
        county = prompt("What county do you live in?","Eau Claire");
        switch(county.toLowerCase()){
            case "eau claire":
                tax+=0.005*amount;
                break;
            case "dunn":
                tax+=0.004*amount;
                break;
            default:
                console.log("Error!");
                break;
        }
    } else if(state.toLowerCase()==="illinois"||state.toLowerCase()==="il"){
        tax=0.08*amount;
    }
    total = +amount + +tax;
    total = total.toFixed(2);
    document.getElementById("main").innerHTML="The tax is "+tax+"<br/>The total is "+total;
}