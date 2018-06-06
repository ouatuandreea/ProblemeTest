function myFunction(){
    var noun = prompt("Enter a noun","dog");
    var verb = prompt("Enter a verb", "walk");
    var adjective = prompt("Enter and adjective", "blue");
    var adverb = prompt("Enter an adverb", "quickly");
    document.getElementById("main").innerHTML = "Do you " + verb + " your " + adjective + " " + noun + " " + adverb + "? That's hillarious!";
}