$(document).ready(function(){
    var number = 1244.35;
    $("#results").html("Reversed " + number + " is " + reverseNumber(number).join(""));
});

function reverseNumber(x){
    var string = x.toString();
    var final = [];
    for(var i=0;i<string.length;i++){
        final[string.length-i-1]=string[i];
    }
    return final;
}