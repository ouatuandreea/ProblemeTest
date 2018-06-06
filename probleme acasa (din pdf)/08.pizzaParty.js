function myFunction(){
    do{
        var nrOfPeople = parseInt(prompt("How many people?","8"));
    } while(isNaN(nrOfPeople));
    do{
        var nrOfPizzas = parseInt(prompt("How many pizzas do you have?","2"));
    } while (isNaN(nrOfPizzas));
    var slicePerPerson = (nrOfPizzas * 8) / nrOfPeople;
    var leftoverSlices = (nrOfPizzas * 8) % nrOfPeople;
    document.getElementById("main").innerHTML = nrOfPeople + " people with " + nrOfPizzas + " pizzas. <br/> Each person gets " + Math.floor(slicePerPerson) + " pieces of pizza. <br/> There are " + leftoverSlices + " leftover pieces.";
    
}

