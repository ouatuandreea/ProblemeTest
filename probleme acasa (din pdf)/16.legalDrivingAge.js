function myFunction(){
    var myMap = {
        'Romania':18,
        'USA':16,
        'China':20,
        'Africa':15
    }
    
    var age;
    age = document.getElementById("age").value;
    if(isNaN(age)||age<0){
        alert("Please enter a valid age!");
        return;
    }
    
    document.getElementById("main").innerHTML = "You can legally drive in the following countries: <br/>";
    for (var key in myMap){
        if(myMap[key]<=age){
            document.getElementById("main").innerHTML += key + "<br/>";
        }
    }
}
