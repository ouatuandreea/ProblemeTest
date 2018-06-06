function myFunction(){
    var number;
    var month;
    var monthMap = {
        1:'january',
        2:'february',
        3:'march',
        4:'april',
        5:'may',
        6:'june',
        7:'july',
        8:'august',
        9:'september',
        10:'october',
        11:'november',
        12:'december'
    }
    do{
        number=prompt("What is the number of the month?","3");
    } while(isNaN(number));
    document.getElementById("main").innerHTML = "The name of the month is " + monthMap[number] + ".";
}