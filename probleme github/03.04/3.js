$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#width").val();
        var y = $("#heigth").val();
        if(checkInputs(x,y)){
            var result = calculateArea(x,y);
            $("#results").html("The rectangle has the area of " + result + " sq. meters");
        }
    });
});

function checkInputs(x,y){
    if(isNaN(x)||isNaN(y)){
        $("#results").html("Please enter a number.")
        return false;
    } else if (x<0 || y<0){
        $("#results").html("Please enter positive values.");
        return false;
    } else return true;
}

function calculateArea(x,y){
    return (x*y).toFixed(2);
}