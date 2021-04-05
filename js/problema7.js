function calcular() {
    var vr1 = document.getElementById('primer').value;
    var vr2 = document.getElementById('segundo').value;
    
        if(vr1==vr2){
            var p =parseFloat(vr1)*parseFloat(vr2);
            document.getElementById('promedio').innerHTML = p; 
        }
        else if(vr1>vr2){
            var p =parseFloat(vr1)-parseFloat(vr2);
            document.getElementById('promedio').innerHTML = p; 
        }
        else{
            var p =parseFloat(vr1)+parseFloat(vr2);
            document.getElementById('promedio').innerHTML = p;  
        
    }
 }