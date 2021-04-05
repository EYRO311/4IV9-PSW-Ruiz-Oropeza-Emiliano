
 function calcular() {
    var vr1 = document.getElementById('sueldob').value;
    if(vr1.length >5){
        alert("No puedes ganar tanto")
    }
    else{
        var p = (parseFloat(vr1)-((parseFloat(vr1))*.15));
        document.getElementById('promedio').innerHTML = p; 
    }
 }

