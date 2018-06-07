function anagram_aux(){
    var string1=document.getElementById("string1").value;
    var string2=document.getElementById("string2").value;
    div=document.createElement("div");
    textNode=document.createTextNode(blocText31);
    div.appendChild(textNode);
    document.body.appendChild(textNode);
}

function anagram() {
    var string1=document.getElementById("string1").value;
    var string2=document.getElementById("string2").value;
    var regularize=function(str){
        return str.toLowerCase().split('').sort().join('').trim();
    }
    var x=regularize(string1);
    var y=regularize(string2);


    if(x===y){
        blocText31="The strings are anagrams";
    }
    else{
        blocText31="No anagrams";
    }
    anagram_aux();
}
