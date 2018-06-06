$(document).ready(function () {

    $("#submit").click(function (event) {

        var nrPeople = Number($('#people').val());
        var nrPizzas = Number($('#pizzas').val());
        var nrSlices = Number($('#slices').val());

        if(checkPizzas(nrPeople,nrPizzas,nrSlices)){
            var slicesPerPerson = calculateSlicesPerPerson(nrSlices,nrPeople);
            var leftovers = leftoverCalc(nrSlices,nrPeople);
            if(!isPlural(nrPizzas)){
                $("#results").html("With " + nrPizzas + " pizza, each of the " + nrPeople + " persons gets " + slicesPerPerson + " slice and there are " + leftovers + " slices left.");
            } else {
                $("#results").html("With " + nrPizzas + " pizzas, each of the " + nrPeople + " persons gets " + slicesPerPerson + " slice and there are " + leftovers + " slices left.");
            }
        }

    });

});

function checkPizzas(nrPeople, nrPizzas, nrSlices){
    if(nrPeople<0 || nrPizzas<0 || nrSlices<0){
        alert("Please enter positive values.");

    } else {
        return true;
    }
    console.log(typeof(nrPeople)+","+typeof(nrPizzas)+","+typeof(nrSlices));
}

function calculateSlicesPerPerson(nrSlices, nrPeople){
    var num = Math.round(nrSlices/nrPeople);
    return num;
}

function isPlural(num){
    if(num==0||num>1){
        return true;
    } else {
        return false;
    }
}

function leftoverCalc(sl,ppl){
    var sum = Math.round(sl%ppl);
    return sum;
}