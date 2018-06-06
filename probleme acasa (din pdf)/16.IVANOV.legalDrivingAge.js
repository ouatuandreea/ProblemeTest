function verify_aux(){
    var age=document.getElementById("age").value;
    var div=document.createElement("div");
    var textNode=document.createTextNode(blocText4);
    div.appendChild(textNode);
    document.body.appendChild(div);
}

function verify() {
    var age=document.getElementById("age").value;
    if(isNaN(age)===true || age===""){
        blocText4="Please insert only a number";
    }
    blocText4 = (age < 16) ? "Too young for driving":"Old enough to have an accident";

    verify_aux();

}
