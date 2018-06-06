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
    var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    write("//\t");
    for(var k=0;k<numbers.length;k++){
        write(numbers[k]+"\t");
    }
    write("<br/>");
    for(var i=0;i<numbers.length;i++){
        write(numbers[i]+"\t");
        for(var j=0;j<numbers.length;j++){
            write(numbers[i]*numbers[j]);
            write("\t");
        }
        write("<br/>");
    }
}