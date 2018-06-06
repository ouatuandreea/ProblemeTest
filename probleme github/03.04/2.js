$(document).ready(function(){
   $("#calculate").click(function(event){
       var x = $("#number").val();
       var result = checkDiv(x);
       if(result===true){
           $("#results").html("Number is divisible by both 5 and 7.");
       } else $("#results").html("Number is NOT divisible by 5 and 7.")
   });
});

function checkDiv(x){
    if(x%5===0 && x%7===0){
        return true;
    } else return false;
}