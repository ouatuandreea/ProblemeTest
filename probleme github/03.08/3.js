$(document).ready(function(){
    var text = "Doggy walked the white dogger to the dog canteen and then dogily ran in the doG park.";
    var word = "dog";
    $("#results").html(findOccurance(word,text,true));
});

function findOccurance(word,text,isCaseSensitive){
    switch(arguments.length){
        case 2: return findOccuranceInsensitive(word);
        case 3: if(isCaseSensitive===true){
                    return findOccuranceSensitive(word);
                } else {
                    return findOccuranceInsensitive(word);
                }
                break;
                           }
    function findOccuranceInsensitive(word){
        return "asd"
    }
    function findOccuranceSensitive(word){
        return "asd2"
    }
}
