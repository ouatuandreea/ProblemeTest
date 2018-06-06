$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#number1").val();
        var y = $("#number2").val();
        if(checkInputs(x,y)){
            if(x>y){
               var aux = x;
                x = y;
                y = aux;
            }
            $("#results").html("x = " + x + "<br>y = " + y);
        }
    });
});

function checkInputs(x,y){
    if(isNaN(x)||isNaN(y)){
        $("#results").html("Please enter a number.");
        return false;
    } else if (x<0 || y<0){
        $("#results").html("Please enter positive values.");
        return false;
    } else return true;
}