function myFunction(){
    var numbers = [];
    var number;

    do{
        number = prompt("Enter a number:","100");
        if(!isNaN(number)){
            numbers.push(number);  
        } else if(number==="done"){
            alert("Stopped entering values.");
        } else {
            alert("You entered a non-numeric value.");
        }
    } while (number!=="done");
    clear();
    write("Numbers are: " + numbers);
    var mean, max, min, stdv;
    mean=getMean(numbers).toFixed(2);
    write("<br>The mean is: " + mean);
    min=getMin(numbers);
    write("<br>The minimum is: " + min);
    max=getMax(numbers);
    write("<br>The maximum is: " + max);
    stdv=getSTDEV(numbers);
    write("<br>The standard deviation is: " + stdv);
    
}

function write(string){
    document.getElementById("main").innerHTML += string;
}

function clear(){
    document.getElementById("main").innerHTML = "";
}

function getMin(numbers){
    var min = numbers[0];
    for(var i=1;i<numbers.length;i++){
        if(numbers[i]<min){
            min = numbers[i];
        }
    }
    return min;
}

function getMax(numbers){
    var max = numbers[0];
    for(var i=1;i<numbers.length;i++){
        if(numbers[i]>max){
            max = numbers[i];
        }
    }
    return max;
}

function getMean(numbers){
    var sum=0;
    for(var i=0;i<numbers.length;i++){
        sum+=+numbers[i];
    }
    return sum/numbers.length;
}

function getSTDEV(numbers){
    var sqrdValues = [];
    var sqrdValue;
    var mean = getMean(numbers);
    for(var i=0;i<numbers.length;i++){
        sqrdValue = Math.pow(numbers[i]-mean,2);
        sqrdValues.push(sqrdValue);
    }
    return Math.sqrt(getMean(sqrdValues));
}