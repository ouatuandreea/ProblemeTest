$(document).ready(function () {

    $("#convert").click(function(){
        var temp = $("#temp").val();
        var scaleFrom = $("#scale-from").val();
        var scaleTo = $("#scale-to").val();
        var conversion = scaleFrom + scaleTo;

        var converted = convert(temp,conversion);
        if(checkFields(temp)){
            if(converted==="Error"){
                $("#results").html("You picked the same scales, try again.");
            } else {
                $("#results").html(temp+"°"+scaleFrom+" is "+converted+"°"+scaleTo+".");
            }
        }
    });

});

function convert(temp,conversion){
    var num=0;
    switch (conversion){
        case 'CF':
            num = (temp*9/5)+32;
            break;
        case 'CK':
            num = +temp+273.15;
            break;
        case 'FC':
            num = (+temp-32)*5/9;
            break;
        case 'FK':
            num = (temp*459.67)/1.8;
            break;
        case 'KC':
            num = +temp-273.15;
            break;
        case 'KF':
            num = (temp*1.8)-459.67;
            break;
        default:
            return "Error";
    }
    return num.toFixed(2);
}

function checkFields(temperature) {
    if (isNaN(temperature) === true) {
        alert("Please enter numeric values.");
    } else if (!temperature) {
        alert("You forgot something.")
    } else {
        return true;
    }
}