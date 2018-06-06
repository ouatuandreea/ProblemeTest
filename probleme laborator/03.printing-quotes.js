$(document).ready(function() {

    $.getJSON('03.printing-quotes.json', function (json) {
        $("#submit").click(function (event) {
            var quotes = json.quotes;
            var random = Math.floor(Math.random() * quotes.length);
            console.log(random);
            $('#quote').text(quotes[random].quote);
            $('#citation').text(quotes[random].citation);
        })
    })
})