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
    var r;
    do{
        r=prompt("What is the rate of return?","0");
        if(isNaN(r)){
            alert("Input must be a number.");
        } else if (r=='0'){
            alert("Input can't be 0.");
        }
    } while(isNaN(r)||r=='0');
    var years = 72/r;
    write("It will take " + years + " years to double your initial investment.");
}