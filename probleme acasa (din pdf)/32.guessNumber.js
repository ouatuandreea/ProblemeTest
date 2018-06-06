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
    var difficulty;
    var randomNumber;
    var input;
    var inputs = [];
    var guesses=0;
    var again;
    var praise;
    
    do{
        do{
            difficulty = prompt("Pick a difficulty level (1, 2 or 3)","1");
        } while(isNaN(difficulty)||difficulty<1||difficulty>3); 
        randomNumber = getRandom(difficulty);
        
        guesses=0;
        inputs = [];
        
        input = prompt("I have my number. What's your guess?","1");
        guesses++;
        inputs.push(input);

        while(input!=randomNumber){
            if(input<randomNumber){
                input = prompt("Too low. Guess again:","5");
                if(inputs.indexOf(input)>-1){
                    alert("Number was already entered!");
                }
                guesses++;
                inputs.push(input);
            } else {
                input = prompt("Too high. Guess again:","2");
                if(inputs.indexOf(input)>-1){
                    alert("Number was already entered!");
                }
                guesses++;
                inputs.push(input);
            }
        }
        praise = generatePraise(guesses);
        alert("You got it in " + guesses + " guesses! " + praise);
        do{
            again = prompt("Play again? (y/n)","n");
        } while(again!=='y'&&again!=='n');
    } while(again==="y");
    document.getElementById("main").innerHTML = "History:" + inputs;
}

function getRandom(difficulty){
    if(difficulty==='1'){
        return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    } else if(difficulty==='2'){
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    } else if(difficulty==='3'){
        return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    } else return false;
}

function generatePraise(guesses){
    if(guesses==1){
        return "You're a mind reader! ";
    } else if (guesses>=2&&guesses<=3){
        return "Most impressive. ";
    } else if (guesses>=4&&guesses<=6){
        return "You can do better than that. ";
    } else if (guesses>=7){
        return "Better luck next time. ";
    }
}