$(document).ready(function(){
    var arr1 = ['a','c','m'];
    var arr2 = ['a','c','b'];
    $("#results").html(compareArrays(arr1,arr2) + " is lexicographically higher.");
});

function compareArrays(arr1,arr2){
    for(var i in arr1){
        if(arr1[i]>arr2[i]){
            return arr1;
        } else if(arr2[i]>arr1[i]){
            return arr2;
        }else return arr1;
    }
}