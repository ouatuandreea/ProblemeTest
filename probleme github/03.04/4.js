$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#number").val();
        if(checkInputs(x)){
            if(checkDigit(x)){
                $("#results").html("Digit 7 is indeed the 3rd.");
            } else $("#results").html("Digit 7 is NOT the 3rd digit."); 
        }
    });
});

function checkInputs(x){
    if(isNaN(x)){
        $("#results").html("Please enter a number.");
        return false;
    } else return true;
}

function checkDigit(x){
    if(Math.floor((x/100)%10)===7){
        return true;
    } else return false;
}