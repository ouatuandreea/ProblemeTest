function myFunction(){
    var age = prompt("What is your current age?","25");
    var retirement = prompt("At what age would you like to retire?", "65");
    var currentYear = new Date().getFullYear();
    parseInt(age);
    parseInt(retirement);
    var yearsLeft = retirement - age;
    document.getElementById("main").innerHTML = "You have " + yearsLeft + " years left until you can retire. <br/> It's " + currentYear + ", so you can retire in " + (currentYear + yearsLeft) + ".";
}