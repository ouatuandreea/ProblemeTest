$(document).ready(function(){
    $("#calculate").click(function(event){
       var x = $("#xcoord").val();
       var y = $("#ycoord").val();

        if(checkInputs(x,y)){
            if(isInside(x,y)){
                $("#results").html("Point is inside circle.");
            } else $("#results").html("Point is outside circle.");
        }
    });
}); 

function checkInputs(x,y){
    if(isNaN(x)||isNaN(y)){
        $("#results").html("Please enter a number.");
        return false;
    } else return true;
}

function isInside(x,y){
    var radius = 5;
    var distance = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
    if(distance<=radius){
        return true;
    } else return false;
}