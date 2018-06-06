$(document).ready(function () {


    var legalDrivingAges=[{
        country:"UK",
        age:17
    },
    {
        country:"Russia",
        age:16
    },
    {
        country:"Japan",
        age:18
    },
    {
        country:"USA",
        age:16
    }];

    $("#submit").click(function(){
        var age = $("#age").val();
        if(checkFields(age)){
            $("#results").html(checkAge(age,legalDrivingAges));
        }
    });

});

function checkAge(age, arr) {
    var countries = [];
    var str;
    for(i=0;i<arr.length;i++){
        if(age>=arr[i].age){
            countries.push(arr[i].country);
        }
    }
    if(countries.length===0){
        str = "You are not old enough to legally drive.";
    }
    else{
        str = "You are old enough to drive in these countries:";
        for(i=0;i<countries.length;i++){
            str = str + countries[i]+", ";
        }
    }
    return str;
}

function checkFields(age) {
    if (isNaN(age) === true) {
        alert("Please enter numeric values.");
    } else if (!age) {
        alert("You forgot something.")
    } else if (age <= 0) {
        alert("Please enter positive values.");
    } else {
        return true;
    }
}