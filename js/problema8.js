function calcular() {
    var vr1 = document.getElementById('primer').value;
    var vr2 = document.getElementById('segundo').value;
    var vr3 = document.getElementById('tercer').value;

    if(vr1>vr2 & vr1>vr3){
        var p =parseFloat(vr1);
        document.getElementById('promedio').innerHTML = p; 
    }
    else if(vr3>vr1&vr3>vr2){
        var p =parseFloat(vr3);
        document.getElementById('promedio').innerHTML = p;
    }
    else if(vr1==vr2 &vr1>vr3){
        var p =(vr1)+" es el numero mayor "+"junto a "+vr2;;
        document.getElementById('promedio').innerHTML = p; 
    }
    else if(vr3==vr2 &vr3>vr1){
        var p =(vr3)+" es el numero mayor "+"junto a "+vr2;
        document.getElementById('promedio').innerHTML = p; 
    }
    else{
        var p =parseFloat(vr2);
        document.getElementById('promedio').innerHTML = p;  
    }
    
 }