function myFunction(){
    var password = document.getElementById("password").value;
    var passwordLevel = validatePassword(password);
    passwordLevel = levelToString(passwordLevel);
    document.getElementById("main").innerHTML = "The password " + password + " is a " + passwordLevel + " password.";
}

function validatePassword(password){
    var cNumbers=0;
    var cChars=0;
    var cSpecial=0;
    var letter = /^[a-zA-Z]/;
    var number = /^[0-9]/;
    for(var i=0;i<password.length;i++){
        if(password[i].match(letter)){
            cChars++;
        } else if (password[i].match(number)){
            cNumbers++;
        } else {
            cSpecial++;
        }
    }
    if(cChars!==0&&cNumbers!==0&&cSpecial!==0&&password.length>=8){
        return 4;
    } else if(cChars!==0&&cNumbers!==0&&password.length>=8){
        return 3;
    } else if(cNumbers===0&&cSpecial===0&&password.length<8){
        return 2;
    } else if(cChars===0&&cSpecial===0&&password.length<8){
        return 1;
    }
}

function levelToString(passwordLevel){
    switch(passwordLevel){
        case 1:
            return 'very weak';
            break;
        case 2:
            return 'weak';
            break;
        case 3:
            return 'strong';
            break;
        case 4:
            return 'very strong';
            break;
        default:
            return '\"pdf didn\'t include this\"';
            break;
                        }
}