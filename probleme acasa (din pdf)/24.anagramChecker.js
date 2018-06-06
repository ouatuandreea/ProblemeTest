function myFunction(){
    var string1;
    string1 = prompt("Enter the first string:","note");
    var string2;
    string2 = prompt("Enter the second string:","tone");
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    if(isAnagram(string1,string2)){
        document.getElementById("main").innerHTML = "The strings are anagrams.";
    } else document.getElementById("main").innerHTML = "The strings are NOT anagrams.";
}


function isAnagram(string1,string2){
    var i,j;
    var found;
    
    string1 =removeSpecialChars(string1);
    string2 = removeSpecialChars(string2);
    
    for(i=0;i<string1.length;i++){
        found=false;
        for(j=0;j<string2.length;j++){
            console.log("comparing " + string1[i] + " to " + string2[j]);
            if(string1[i]==string2[j]&&found==false){
                console.log("found 2 matching letters, removing " + string1[i]);
                string2 = string2.replace(string2[j],"");
                console.log("string 1 is equal to " + string1);
                console.log("string 2 is equal to " + string2);
                found=true;
                break;
            }
        }
        if(found==false){
            console.log("returning false");
            return false;
        }
    }
    if(string2.length===0){
        console.log("returning true");
        return true;
    } else {
        console.log("returning false");
        return false;
    }
}

function removeSpecialChars(string){
    return string.replace(/[^a-zA-Z0-9]/g,"")
}