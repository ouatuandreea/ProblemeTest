$(document).ready(function () {

    $("#submit").click(function (event) {

        var roomLength = Number($('#length').val());
        var roomWidth = Number($('#width').val());

        if(checkFields(roomLength,roomWidth)){
            var roomAreaFeet = calcArea(roomLength,roomWidth);
            var roomAreaMeters = convertToMeters(roomAreaFeet);
            $('#results').html("The room is " + roomAreaFeet + " sq. feet and " + roomAreaMeters + " sq. meters.");
        }

    });

});

const CONVERSION = 0.09290304;


function convertToMeters(sqFeet){
    var num = sqFeet * CONVERSION;
    return num.toFixed(3);
}

function calcArea(length, width){
    return length*width;
}

function checkFields(length, width){
    if(isNaN(length) === true || isNaN(width)===true){
        alert("Please enter numeric values.");
        return false;
    }
    else if(length<0 || width<0){
        alert("Please enter positive values.");
        return false;
    } else {
        return true;
    }
}