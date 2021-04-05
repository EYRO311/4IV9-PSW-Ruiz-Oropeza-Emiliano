
 function calcular() {
    var vr1 = document.getElementById('sueldob').value;
    var vr2 = document.getElementById('precio').value;
    var vr3 = document.getElementById('ventas').value;
    if(vr1.length >5){
        alert("No puedes ganar tanto")
    }
    else if(vr3.length>2){
        alert("No pudiste vender tanto en un mes")
    }
    else if(vr2.length>3){
        alert("No puede valer tanto un producto")
    }
    else{
        var p =(parseFloat(vr1)+((parseFloat(vr2)*parseFloat(vr3))*.1));
        document.getElementById('promedio').innerHTML = p; 
    }
 }

