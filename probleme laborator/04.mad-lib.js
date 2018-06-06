$(document).ready(function () {

    $("#submit").click(function (event) {
        var verb = $("#verb").val();
        var adj = $("#adj").val();
        var adv = $("#adv").val();
        var per = $("#per").val();
        var obj = $("#obj").val();
        var excl = $("#excl").val();

        if(!verb || !adj || !adv || !per || !obj || !excl){
            alert("You forgot to fill in something!");
        }

        $("#story").html(
            "One day " + per + " was walking " + adv + " down the street. All of the sudden, they saw a " + adj + " "  + obj + ". <br /> \"" + excl + "!\" They exclaimed. Then they put the " + obj + " in their " + verb + " home. The end?"
        );

    });

});