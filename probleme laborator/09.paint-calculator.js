$(document).ready(function () {
    $("#submit").click(function (event) {

        var length = Number($('#length').val());
        var width = Number($('#width').val());
        var unit = $('input:radio[name=measurement]:checked').val();

        if (checkFields(length, width, unit) === true) {
            var area = Number(calcArea(length, width));
            var measurement = " square" + (checkMeasurement(unit) ? " feet" : " meters");
            var paintNeeded = calcPaintNeeded(area, unit);
            var volume = (checkMeasurement(unit) ? " gallons" : " liters");

            $('#results').html("You will need to purchase " + paintNeeded + " " + volume + " of paint to cover " + area + " " + measurement + ".");
        }

    });
});

var GALLON = 350;
var LITRE = 8.6;

function calcArea(length, width) {
    return length * width;
}

function checkMeasurement(unit) {
    if (unit === 'imperial') {
        return true;
    } else if (unit === 'metric') {
        return false;
    }
}

function calcPaintNeeded(area, unit) {
    var num;
    if (checkMeasurement(unit)) {
        num = Math.ceil(area / GALLON);
    } else if (!checkMeasurement(unit)) {
        num = Math.ceil(area / LITRE);
    }
    return num;
}

function checkFields(length, width, unit) {
    if (isNaN(length) === true || isNaN(width) === true) {
        alert("Please enter numeric values.");
    } else if (!length || !width) {
        alert("You didn't input anything.")
    } else if (length < 0 || width < 0) {
        alert("Please enter positive values.");
    } else if (!unit) {
        alert("Please choose a measurement type.");
    } else {
        return true;
    }
}
