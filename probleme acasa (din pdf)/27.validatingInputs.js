function myFunction(){
    var fname = readInput("fname");
    var lname = readInput("lname");
    var zip = readInput("zip");
    var emplid = readInput("emplid");
    clear();
    if(validateInput(fname,lname,zip,emplid)){
        write("<br/>There were no errors found.");
    }
}

function isLetter(char){
    return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char.toLowerCase()) >=0;
}

function isDigit(char){
    return '0123456789'.indexOf(char.toLowerCase()) >=0;
}

function readInput(element){
    return document.getElementById(element).value;
}

function validateInput(fname,lname,zip,emplid){
    var returnValue=true;
    
    if(fname===""){
        write("<br/>The first name must be filled in.");
        returnValue=false;
    }else if(fname.length<2){
        write("<br/>\""+fname+"\" is not a valid first name. It is too short.");
        returnValue=false;
    }
    
    if(lname===""){
        write("<br/>The last name must be filled in.");
        returnValue=false;
    }else if(lname.length<2){
        write("<br/>\""+lname+"\" is not a valid last name. It is too short.");
        returnValue=false;
    }
    
    if(zip.length>0&&zip.length<3){
        write("<br/>Zip code must be at least 3 characters long.");
        returnValue=false;
    } else if (zip.length>6){
        write("<br/>Zip code must be at most 6 characters long.");
        returnValue=false;
    } 
    else {
        for(var i=0;i<zip.length;i++){
            if(!isDigit(zip[i])){
                write("<br/>Zip code must contain only numbers.");
                returnValue=false;
            }
        }
    }
    
    if(emplid.length>0&&emplid.length!=6){
        write("<br/>Employee ID must be 6 characters long.");
        returnValue=false;
    } else if (!isLetter(emplid[0]) || !isLetter(emplid[1]) || emplid[2]!=="-" || !isDigit(emplid[3]) || !isDigit(emplid[4]) || !isDigit(emplid[5])){
        write("<br/>\"" + emplid + "\" is not a valid employee ID format. Format is \"AA-123\".");
        returnValue=false;
    }
    
    return returnValue;
}

function write(string){
    document.getElementById("main").innerHTML += string;
}

function clear(){
    document.getElementById("main").innerHTML = "";
}