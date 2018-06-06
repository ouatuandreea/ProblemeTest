$(document).ready(function () {
    $("#go").click(function (event) {

        var pass="abc$123";
        var username = $("#name").val();
        var userpass = $("#pass").val();
        var str = "";

        if(userpass === pass){
            str = "Welcome!";
        } else {
            str = "Nope.";
        }

        $("#results").html(str);

    });

});

