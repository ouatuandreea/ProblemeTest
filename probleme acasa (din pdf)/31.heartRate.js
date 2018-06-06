function isDigit(char){
    return '0123456789'.indexOf(char.toLowerCase()) >=0;
}

function isLetter(char){
    return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char.toLowerCase()) >=0;
}

function write(string){
    document.getElementById("main").innerHTML += string;
}

function clear(){
    document.getElementById("main").innerHTML = "";
}

function myFunction(){
    clear();
    document.getElementById("sliderValue").value = document.getElementById("intensity").value+"%";
    
    var restingPulse = document.getElementById("restingPulse").value;
    var age=document.getElementById("age").value;
    var intensity=document.getElementById("intensity").value/100;
    
    var heartRate = Math.floor(((220-age)-restingPulse)*intensity)+(+restingPulse);
    if(restingPulse!==""&&age!==""){
        write("Your hart rate is " + heartRate);  
    } else write("Enter values")
}