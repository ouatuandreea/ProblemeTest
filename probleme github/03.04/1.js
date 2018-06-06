$(document).ready(function(){
    $("#calculate").click(function(event){
        var x = $("#number").val();
        result = checkEven(x);
        if(result===true){
            $("#results").html("Number is even.");
        } else $("#results").html("Number is odd.");
    });
});

function checkEven(x){
    if(x%2===0){
        return true;
    } else return false;
}