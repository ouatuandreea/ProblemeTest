$(document).ready(function(){
    $('#count').click(function (event) {
        var strLength = $('#string').val().length;
        var str = $('#string').val();

        if(!strLength){
            alert('You need to enter something');
        }
        else{
            $('#counter').text('The phrase "' + str + '" is ' + strLength + ' characters long.');

        }
    });
});
