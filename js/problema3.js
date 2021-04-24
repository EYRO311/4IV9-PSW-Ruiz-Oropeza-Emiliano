
 function calcular() {
    var vr1 = document.getElementById('sueldob').value;
    if(vr1 >1000000||vr1<0){
        alert("No pude valer eso tu compra")
    }
    else{
        var p = (parseFloat(vr1)-((parseFloat(vr1))*.15));
        document.getElementById('promedio').innerHTML = p; 
    }
 }

