$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#number1").val();
        var y = $("#number2").val();
        var z = $("#number3").val();
        if(checkInputs(x,y,z)){
            var result = checkSign(x,y,z);
            $("#results").html("Sign is: " + result);
            
        }
    });
});

function checkInputs(x,y,z){
    if(isNaN(x)||isNaN(y)||isNaN(z)){
        $("#results").html("Please enter a number.");
        return false;
    } else return true;
}

function checkSign(x,y,z){
    var prod = x*y*z;
    if(prod===0){
        return "0";
    } else if (prod<0){
        return "-";
    } else return "+";
}