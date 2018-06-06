$(document).ready(function(){
    $("#calculate").click(function(event){

        var arr = $("#input").val().split(",");
        var max = getMax(arr);
        var min = getMin(arr);
        $("#results").html("Max: " + max + "<br>Min: " + min);
    });
});


function getMax(arr){
    var max = arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

function getMin(arr){
    var min = arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}