function myFunction(){
    var nrOfItems = 3;
    var subtotal = 0;
    var price;
    var quantity;
    for(var i=0; i<nrOfItems; i++){
        do{
            price = prompt("Enter the price of item " + (i+1),Math.random()*100); 
        } while (isNaN(price));
        parseFloat(price);
        do{
            quantity = prompt("Enter the quantity of item " + (i+1),Math.random()*100); 
        } while (isNaN(quantity));
        parseFloat(quantity);
        subtotal += price * quantity;
    }
    subtotal = subtotal.toFixed(2);
    var tax = (subtotal * 0.055).toFixed(2);
    var total = (+subtotal + +tax).toFixed(2);
    document.getElementById("main").innerHTML = "Subtotal: $" + subtotal + "<br/> Tax: $" + tax + "<br/> Total: $" + total;
}