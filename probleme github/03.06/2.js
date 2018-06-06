$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#from").val();
        var y = $("#to").val();
        var results = [];
        if(checkInputs(x,y)){
            results = getGoodNumbers(x,y);
            $("#results").html(results.join(","));
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

function getGoodNumbers(x,y){
    var goodNumbers = [];
    for(var i=x;i<=y;i++){
        if(i%5!==0 && i%7!==0){
            goodNumbers.push(i);
        }
    }
    $("#results").html(goodNumbers.join(","));
    return goodNumbers;
}