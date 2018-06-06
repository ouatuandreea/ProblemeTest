$(document).ready(function () {
    $("#additem").click(function (event) {

        var name = $('#name').val();
        var price = Number($('#price').val());
        var quantity = Number($('#quantity').val());

        items = []; //FARA VAR IN FATA CA SA FIE VARIABILA GLOBALA
        
        if (checkFields(name, price, quantity) === true) {
            items = addToList(items, name, price, quantity);
            printItem(name, price, quantity);
        }
    });

    $("#calculate").click(function (event) {
        var taxIncl = $("input:radio[name=tax]:checked").val();
        var totals = [];
        
        totals = calcTotals(taxIncl, items, totals);
        console.log(totals);
        
        $("#totals").html("Subtotal: $" + totals[0] + "<br>" + "VAT: $" + totals[1] + "<br>" + "Total: $" + totals[2]);
    });

});

var VAT = 0.2;

function addToList(list, name, price, quantity) {
    list.push({
        "name": name,
        "price": price,
        "quantity": quantity
    });
    return list;
}

function printItem(name, price, quantity) {
    name = "<td>" + name + "</td>";
    quantity = "<td>" + quantity + "</td>";
    price = "<td>" + price.toFixed(2) + "</td>";
    $('#items').append("<tr>" + name + quantity + price + '</tr>');
}

function calcPrice(list) {
    var num = 0;
    for (i = 0; i < list.length; i++) {
        num = num + (list[i].quantity * list[i].price);
    }
    return num;
}

function calcTotals(taxIncl, arr1, arr2) {
    var subtotal;
    var taxAmount;
    var total;

    if (taxIncl === "yes") {
        total = Number(calcPrice(arr1));
        subtotal = Number(total / 1.2);
        taxAmount = Number(total - subtotal);
    } else if (taxIncl === "no") {
        subtotal = Number(calcPrice(arr1));
        taxAmount = Number(VAT * subtotal);
        total = Number(subtotal + taxAmount);
    }
    arr2.push(subtotal.toFixed(2), taxAmount.toFixed(2), total.toFixed(2));
    return arr2;
}

function checkFields(name, price, quantity) {
    if (isNaN(price) === true || isNaN(quantity) === true) {
        alert("Please enter numeric values.");
    } else if (!price || !quantity || !name) {
        alert("You forgot something.");
    } else if (price < 0 || quantity < 0) {
        alert("Please enter positive values.");
    } else {
        return true;
    }
}
