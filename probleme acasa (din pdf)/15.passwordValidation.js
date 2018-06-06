function myFunction(){
    var map = {
        'Mishu': "abc$123",
        'Richard': "p13dp1p3r"
    }

    var username;
    username = document.getElementById("myUsername").value;
    var password;
    password = document.getElementById("myPassword").value;
    
    if(map[username]===password){
        document.getElementById("main").innerHTML = "Hello!";
    } else {
        document.getElementById("main").innerHTML = "I don't know you!";
    }
    
}