function write(string){
    document.getElementById("main").innerHTML += string;
}

function clear(){
    document.getElementById("main").innerHTML = "";
}

function generateRandomBetween(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function myFunction(){
    var names = [];
    var name;
    do{
        name = prompt("Enter a name:");
        if(name!==""){
            names.push(name);
        }
    } while(name!=="");
    
    
    var winner = generateRandomBetween(0,names.length-1);
    showNames(names);
    console.log(winner);
    clear();
    write("The winner is... " + names[winner]);
}

function showNames(names){
    for(var i=0;i<names.length;i++){
        console.log(names[i]);
    }
}