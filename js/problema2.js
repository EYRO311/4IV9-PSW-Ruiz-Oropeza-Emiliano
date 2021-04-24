
 function calcular() {
    var vr1 = document.getElementById('sueldob').value;
    var vr2 = document.getElementById('precio').value;
    var vr3 = document.getElementById('ventas').value;
    if(vr1>10000||vr1<0){
        alert("No puedes ganar eso")
    }
    else if(vr3>1000||vr3<0){
        alert("No pudiste vender eso en un mes")
    }
    else if(vr2>10000||vr2<0){
        alert("No puede valer eso un producto")
    }
    else{
        var p =(parseFloat(vr1)+((parseFloat(vr2)*parseFloat(vr3))*.1));
        document.getElementById('promedio').innerHTML = p; 
    }
 }

