function myFunction(){
    do{
        var length = prompt("What is the length of the room?","15");
    } while(isNaN(length));

    do{
        var width = prompt("What is the width of the room?", "20");
    } while(isNaN(width));

    var sqFeet = length * width;
    var sqMeters = sqFeet * 0.09290304;

    if(document.getElementById("r1").checked){
        document.getElementById("main").innerHTML = "You entered dimensions of " + length + " feet by " + width + " feet." + "<br/> The area is " + sqFeet + " square feet.";
    }else if(document.getElementById("r2").checked){
        document.getElementById("main").innerHTML = "You entered dimensions of " + length + " feet by " + width + " feet." + "<br/> The area is " + sqMeters + " square meters." ;
    }
}