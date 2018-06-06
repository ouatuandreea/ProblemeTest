function myFunction(){
    var first = prompt("What is the first number", "5");
    var second = prompt("What is the second number", "4");
    document.getElementById("main").innerHTML = 
        first + " + " + second + " = " + (+first + +second) + "<br/>" +
        first + " - " + second + " = " + (+first - +second) + "<br/>" +
        first + " / " + second + " = " + (+first / +second) + "<br/>" +
        first + " * " + second + " = " + (+first * +second);
}
