$(document).ready(function(){
    var arr1 = [1,22,5,8,12,15,18,25,3];
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
    $("#results").html(arr1.join(","));
});