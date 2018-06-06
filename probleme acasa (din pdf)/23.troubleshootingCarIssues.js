function myFunction(){
    var response;
    do{
        response=prompt("Is the car silent when you turn the key?","y");
    } while(response!=="y"&&response!=="n");
    if(response==="y"){
        do{
            response=prompt("Are the battery terminals corroded?","y");
        } while(response!=="y"&&response!=="n");
        if(response==="y"){
            document.getElementById("main").innerHTML = "Clean terminals and try starting again.";    
        } else {
            document.getElementById("main").innerHTML = "Replace cables and try again.";
        }
    } else {
        do{
            response=prompt("Does the car make a clicking noise?","y");
        } while(response!=="y"&&response!=="n");
        if(response==="y"){
            document.getElementById("main").innerHTML = "Replace the batteries.";
        } else {
            do{
                response=prompt("Does the car crank up but fail to start?");
            }while(response!=="y"&&response!=="n");
            if(response==="y"){
                document.getElementById("main").innerHTML="Check spark plug connections.";
            } else {
                do{
                    response=prompt("Does the engine start and the die?","y")
                } while(response!=="y"&&response!=="n");
                if(response==="n"){
                    document.getElementById("main").innerHTML="Get it in for service.";
                } else {
                    do{
                        response=prompt("Does your car have fuel injection?");
                    } while(response!=="y"&&response!=="n");
                    if(response==="y"){
                        document.getElementById("main").innerHTML = "Check to ensure the choke is opening and closing.";
                    } else document.getElementById("main").innerHTML="Get it in for service.";
                }
            }
        }
    }
}