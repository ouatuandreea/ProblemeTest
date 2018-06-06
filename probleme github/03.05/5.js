$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#number").val();
        if(checkInputs(x)){
            var result = numberToDigit(x);
            $("#results").html(result);
        }
    });
});

function checkInputs(x){
    if(isNaN(x)){
        $("#results").html("Please enter a number.");
        return false;
    } else if(x<0){
        $("#results").html("Please enter a positive value.");
        return false;
    } else return true;
}

function numberToDigit(x){
    var digits = ["zero","one","two","three","four","five","six","seven","eight","nine","not a digit"];
    if(x>=0&&x<=9){
        return digits[x];
    } else return digits[10];
}