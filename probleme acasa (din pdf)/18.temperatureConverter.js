function loadOptions(){
     var scales = {
        'C':'Celsius',
        'F':'Fahrenheit',
        'K':'Kelvin'
    }
    var select = document.getElementById('optionsList');
    var option;
    for(var key1 in scales){
        for(var key2 in scales){
            if(key1!==key2){
                option = document.createElement('option');
                option.innerHTML = scales[key1] + " to " + scales[key2];
                option.value= key1+key2;
                select.appendChild(option);
            }
        }
    }
}

function convert(){
    var scale1 = document.getElementById("optionsList").value[0];
    var scale2 = document.getElementById("optionsList").value[1];
    var value = document.getElementById("value").value;
    var convertedValue;
 
    switch(scale1+scale2){
        case 'CF':
            convertedValue = (value*9/5)+32;
            break;
        case 'CK':
            convertedValue = value+273.15;
            break;
        case 'FC':
            convertedValue = (value-32)*5/9;
            break;
        case 'FK':
            convertedValue = (value + 459.67)*5/9;
            break;
        case 'KC':
            convertedValue = value - 273.15;
            break;
        case 'KF':
            convertedValue = value * 9/5 - 459.67;
            break;
        default:
            convertedValue = null;
            break;
                        }
    convertedValue = convertedValue.toFixed(1);
    
    document.getElementById("result").value = convertedValue;
    
}