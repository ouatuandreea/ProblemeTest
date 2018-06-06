$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#number1").val();
        var y = $("#number2").val();
        var z = $("#number3").val();
        if(checkInputs(x,y,z)){
            var result = getBiggest(x,y,z);
            $("#results").html("Biggest is: " + result);
            
        }
    });
});

function checkInputs(x,y,z){
    if(isNaN(x)||isNaN(y)||isNaN(z)){
        $("#results").html("Please enter a number.");
        return false;
    } else return true;
}

function getBiggest(x,y,z){
    var biggest = +x;
    if(+y>biggest){
        biggest = y;
    }
    if(+z>biggest){
        biggest = z;
    }
    return biggest;
}