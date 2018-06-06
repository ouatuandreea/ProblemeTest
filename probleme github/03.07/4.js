$(document).ready(function(){
    var arr1 = [1,2,3,2,3,4,5,1,2,1,2];
    var counter = 1;
    var maxCounter = 0;
    var position = 0;
    for(var i=0;i<arr1.length;i++){
        if(arr1[i]+1==arr1[i+1]){
            counter++;
            if(counter>maxCounter){
                maxCounter=counter;
                position=i-counter+2;
            }
        } else {
            counter = 1;
        }
    }
    $("#results").html("Max : " + maxCounter + " ("+arr1.slice(position,position+maxCounter)+").");
});