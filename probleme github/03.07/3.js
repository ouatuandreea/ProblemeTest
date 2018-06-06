$(document).ready(function(){
    var arr1 = [2,1,3,3,3,3,3,2,2,2,2,2,2,3,3];
    var counter = 1;
    var maxCounter = 0;
    var position = 0;
    for(var i=0;i<arr1.length;i++){
        if(arr1[i]==arr1[i+1]){
            counter++;
            if(counter>maxCounter){
                maxCounter=counter;
                position=i-counter+2;
            }
        } else {
            counter = 1;
        }
    }
    $("#results").html("Max appeareances: " + maxCounter + " ("+arr1.slice(position,position+maxCounter)+").");
});