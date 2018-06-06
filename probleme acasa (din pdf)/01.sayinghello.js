function myFunction(){
  var person = prompt("What is your name?","Mishu");
  if(person!=null){
    document.getElementById("main").innerHTML = "Hello, " + person + ", nice to meet you.";
  }
}

function myFunctionChallenge(){
    document.getElementById("main").innerHTML = "Hello, " + prompt("What is your name?","Mishu") + ", nice to meet you";
}