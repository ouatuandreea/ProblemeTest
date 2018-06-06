function myFunction(){
    var sum=0;
    var times;
    var n;
    do{
        times = prompt("How many numbers do you want to add?","5");
    } while(isNaN(times));
    for(var i=0;i<times;i++){
        n=prompt("Enter a number",i+1);
        if(isDigit(n)){
            sum+=+n;
        }
    }
    write("The sum is " + sum);
}
    
function isDigit(char){
    return '0123456789'.indexOf(char.toLowerCase()) >=0;
}

function write(string){
    document.getElementById("main").innerHTML = string;
}