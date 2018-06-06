function write(string){
    document.getElementById("main").innerHTML += string;
}

function clear(){
    document.getElementById("main").innerHTML = "";
}

function myFunction(){
    var minLength;
    do{
        minLength = prompt("What's the minimum length?","8");
    } while(isNaN(minLength));
    var nrSpecialChars;
    do{
        nrSpecialChars = prompt("How many special characters?","2");
    } while(isNaN(nrSpecialChars));
    var nrDigits;
    do{
        nrDigits = prompt("How many numbers?","2");
    } while(isNaN(nrDigits));
    var nrLetters = minLength-nrSpecialChars-nrDigits;
    
    var thePass;
    thePass = generatePassword(nrSpecialChars,nrDigits,nrLetters);
    write(thePass+"<br>");
}

function generatePassword(nrSpecialChars,nrDigits,nrLetters){
    var thePass="";
    var letters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var digits='0123456789';
    var specialChars="!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var i;
    for(i=0;i<nrLetters;i++){
        thePass+=letters.charAt(Math.floor(Math.random()*letters.length));
    }
    for(i=0;i<nrDigits;i++){
        thePass+=digits.charAt(Math.floor(Math.random()*digits.length));
    }
    for(i=0;i<nrSpecialChars;i++){
        thePass+=specialChars.charAt(Math.floor(Math.random()*specialChars.length));
    }
    thePass = randomizePassword(thePass);
    return thePass;
}

function randomizePassword(thePass){
    thePass=thePass.split('');
    for(var i=0;i<thePass.length;i++){
        var random = generateRandomBetween(0,thePass.length-1);
        var temp = thePass[i];
        thePass[i]=thePass[random];
        thePass[random]=temp;
    }
    return thePass.join('');
}

function generateRandomBetween(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
