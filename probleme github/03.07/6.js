$(document).ready(function(){
    var arr1 = [1,1,22,22,4,2,22,1,1,22,22,5,6,7];
    var aux;
    for(var i=0;i<arr1.length;i++){
        for(var j=i;j<arr1.length;j++){
            if(arr1[j]<arr1[i]){
                aux=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=aux;
            }
        }
    }
    var counter = 1;
    var maxCounter = 0;
    var position = 0;
    for(var k=0;k<arr1.length;k++){
        if(arr1[k]==arr1[k+1]){
            counter++;
            if(counter>maxCounter){
                maxCounter=counter;
                char = arr1[k];
            }
        } else {
            counter = 1;
        }
    }
    $("#results").html("Max appeareances: " + maxCounter + " (number "+char+").");
});