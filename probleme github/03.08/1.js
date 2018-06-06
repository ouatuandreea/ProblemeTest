$(document).ready(function(){
    var number = 1244635;
    $("#results").html("Last digit of " + number + " is " + lastDigitOf(number));
});

function lastDigitOf(x){
    var digits = ["zero","one",'two',"three",'four',"five","six","seven","eught","nine"];
    switch(Math.floor(x%10)){
        case 0: return digits[0];
        case 1: return digits[1];
        case 2: return digits[2];
        case 3: return digits[3];
        case 4: return digits[4];
        case 5: return digits[5];
        case 6: return digits[6];
        case 7: return digits[7];
        case 8: return digits[8];
        case 9: return digits[9];
        default: return false;
                           }
}