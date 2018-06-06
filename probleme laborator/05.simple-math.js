 $(document).ready(function() {

    $("#submit").click(function () {
        var first = Number($("#first").val());
        var second = Number($("#second").val());
        var sum = first + second;
        var diff = first - second;
        var prod = first * second;
        var quot = first / second;

        if(isNaN(first) === true || isNaN(second) === true){
            alert("Please enter a number.");
        }
        else if( first < 0 || second < 0){
            alert("Please enter a positive number");
        }
        else{
            $('#results').html(first + " + " + second+ " = " + sum + "<br />");
            $('#results').append(first + " - " + second+ " = " + diff + "<br />");
            $('#results').append(first + " * " + second+ " = " + prod + "<br />");
            $('#results').append(first + " / " + second+ " = " + quot + "<br />");
        }
    })
});