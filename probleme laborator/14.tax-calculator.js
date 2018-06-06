$(document).ready(function () {
    $("#calculate").click(function (event) {

        var state = $('#state').val();
        var amount = Number($('#amount').val());

        if (checkFields(state, amount) === true) {
            if(state.toLowerCase()==="wi"||state.toLowerCase()==="wisconsin"){
                outputTotal = calcTax(amount);
            }
        }
        $('#results').html(outputTotal);
    });

});

var TAX = 0.055;

function calcTax(amount){
    var toAdd = Number((amount*TAX).toFixed(2));
    var total = Number((amount+toAdd).toFixed(2));

    var str = "The subtotal is $" + amount + ". <br>" +
            "The tax is $" + toAdd + ".<br>" +
            "The total is $" + total + ".";
    return str;
}

function checkFields(state, amount) {
    if (isNaN(amount) === true) {
        alert("Please enter numeric values.");
    } else if (!amount || !state) {
        alert("You forgot something.")
    } else if (amount < 0) {
        alert("Please enter positive values.");
    } else {
        return true;
    }
}
