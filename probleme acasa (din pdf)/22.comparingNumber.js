var numberArray = [];

function myFunction(){
    var number;
    for(var i=0;i<5;i++){
        do{
            number=prompt("What is the value of number " + (i+1),"1");
        } while (isNaN(number)||(nrExists(number)))
        numberArray[i]=number;
    }
    var largestNumber = findLargest(numberArray);
    document.getElementById("main").innerHTML = "The largest number is " + largestNumber + ".";
}

function nrExists(number){
    for(var i=0;i<numberArray.length;i++){
        if(numberArray[i]===number){
            return true;
        }
    }
    return false;
}

function findLargest(numberArray){
    var max=numberArray[0];
    for(var i=1;i<numberArray.length;i++){
        console.log("comparing "+numberArray[i]+" to "+max);
        if(+numberArray[i]>+max){
            max=numberArray[i];
            console.log("found max: "+max);
        }
    }
    return max;
}