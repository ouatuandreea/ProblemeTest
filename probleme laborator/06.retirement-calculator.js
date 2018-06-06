$(document).ready(function () {

    var dt = new Date();
    var thisYear = dt.getFullYear();

    $("#submit").click(function (event) {

        var currentAge = Number($('#current').val());
        var desiredAge = Number($('#retirement').val());

        if(isNaN(currentAge) === true || isNaN(desiredAge)===true){
            alert("Please enter numeric values.");
        }
        else if(currentAge<0 || desiredAge<0){
            alert("Please enter positive values.");
        }
        else {
            var yearsLeft = desiredAge - currentAge;
            var retireYear = thisYear + yearsLeft;
            if(yearsLeft<=0){
                $('#results').html("You can retire now");
            }else{
                $("#results").html("You have " + yearsLeft + " until you can retire.");
            }
        }
    });
});