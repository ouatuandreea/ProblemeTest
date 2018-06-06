function myFunction(){
    do{
        var length = parseInt(prompt("What is the length of the room?","20"));
    } while(isNaN(length));
    do{
        var width = parseInt(prompt("What is the width of the room?","21"));
    } while(isNaN(width));
    var sqFeet = length * width;
    const sqFeetCovered = 350;
    document.getElementById("main").innerHTML = "You will need to purchase " + Math.ceil(sqFeet/sqFeetCovered) + " gallons of paint to cover " + sqFeet + " square feet.";
}