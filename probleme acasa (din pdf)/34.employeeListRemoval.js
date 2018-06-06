var employees = ["Adrian Arby","Bob Bean","Carl Marc's","Daniel"];

function myFunction(){
    var employee = prompt("Write employee name:","Daniel");
    removeEmployee(employee);
    clear();
    showEmployees();
}

function showEmployees(){
    for(var i=0;i<employees.length;i++){
        write((i+1)+": "+employees[i]+"<br>");
    }
}

function removeEmployee(employee){
    var index;
    for(var i=1;i<employees.length;i++){
        if(employee.toLowerCase()==employees[i].toLowerCase()){
            index=i;
        }
    }
    if(index>-1){
        employees.splice(index,1);
    } else {
        alert("Employee does not exist.");
    }
}

function write(string){
    document.getElementById("main").innerHTML += string;
}

function clear(){
    document.getElementById("main").innerHTML = "";
}

