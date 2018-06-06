
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
    clear();
    var question = prompt("What's your question?","Will i be rich and famous?");
    var randomNumber = generateRandomBetween(1,4);
    switch(randomNumber){
        case 1:
            write("Yes");
            break;
        case 2:
            write("No");
            break;
        case 3:
            write("Maybe");
            break;
        case 4:
            write("Ask again later");
            break;
        default:
            write("Error");
            break;
                       }
}