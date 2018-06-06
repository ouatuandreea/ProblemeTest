$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#from").val();
        var y = $("#to").val();
        var results = [];
        if(checkInputs(x,y)){
            for(var i=x ; i<=y ; i++){
                results.push(i);
            }
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