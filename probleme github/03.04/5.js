$(document).ready(function(){
    $("#calculate").click(function(event){
       var x = $("#number").val();
        if(checkInputs(x)){
            if(checkDigit(x)){
                $("#results").html("The 3rd digit in binary is 1.");   
            } else $("#results").html("The 3rd digit in binary is 0.");
        }
    });
}); 

function checkInputs(x){
    if(isNaN(x)){
        $("#results").html("Please enter a number.");
        return false;
    }  else if(x<0){
        $("#results").html("Please enter a postive value.");
        return false;
    } else return true;
}

function checkDigit(x){
    if((x&8).toString(2)===(8).toString(2)){
        return true;
    } else return false;
}