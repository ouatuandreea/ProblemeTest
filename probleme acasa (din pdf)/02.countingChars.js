function myFunction() {
    var theString = prompt("What is your input string?","Homer");
    if(theString!=""){
        document.getElementById("main").innerHTML = theString + " has " + theString.length + " characters.";
    } else document.getElementById("main").innerHTML = "Please enter a string.";
}