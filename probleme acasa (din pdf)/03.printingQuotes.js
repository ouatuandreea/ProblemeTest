function myFunction(){
    var quote = prompt("What is the quote?", "These are not the droids you are looking for.");
    var who = prompt("Who said that?", "Obi-wan Kenobi");
    if(quote!==null&&who!==null){
        document.getElementById("main").innerHTML = who + " said \"" + quote + "\"";
    }
}