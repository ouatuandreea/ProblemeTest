$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#number1").val();
        var y = $("#number2").val();
        var z = $("#number3").val();
        if(checkInputs(x,y,z)){
            var numbers = [x,y,z];
            numbers.sort(function(a,b){
                return b-a;
            });
            $("#results").html(numbers.join(","));
        }
    });
});

function checkInputs(x,y,z){
    if(isNaN(x)||isNaN(y)||isNaN(z)){
        $("#results").html("Please enter a number.");
        return false;
    } else return true;
}

function checkLowest(x,y,z){
    var lowest = +x;
    if(+y<lowest){
        lowest = y;
    }
    if(+z<lowest){
        lowest = z;
    }
    return lowest;
}

function checkBiggest(x,y,z){
    var biggest = +x;
    if(+y>biggest){
        biggest = y;
    }
    if(+z>biggest){
        biggest = z;
    }
    return biggest;
}

function inBetween(x,y,z){
   
}